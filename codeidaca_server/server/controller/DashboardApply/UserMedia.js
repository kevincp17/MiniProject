import { Op } from "sequelize";
import config from "../../config/config";
import fs from "fs";

const fsPromise = fs.promises;

const getUserMedia = async (req, res, next) => {
  console.log("get user media");
  const cv = `cv_${req.user.user_entity_id}_${req.query.prog_id}`;
  const photo = `photo_${req.user.user_entity_id}_${req.query.prog_id}`;

  try {
    const getCV = await req.context.models.users_media.findOne({
      where: {
        usme_entity_id: req.user.user_entity_id,
        usme_filetype: { [Op.or]: ["word", "pdf"] },
        usme_filename: { [Op.like]: `${cv}%` },
      },
    });

    const getPhoto = await req.context.models.users_media.findOne({
      where: {
        usme_entity_id: req.user.user_entity_id,
        usme_filetype: "jpg",
        usme_filename: { [Op.like]: `${photo}%` },
      },
    });

    req.userMedia = {
      cv: getCV,
      photo: getPhoto,
    };
    next();
  } catch (error) {
    console.log("Get User Media Error");
    console.log(error);
    return res.status(404).send(error);
  }
};

const setUserMedia = async (req, res, next) => {
  console.log("set user media");
  const { files, fields } = req.fileAttrb;
  try {
    console.log("len " + files.length);
    if (files.length === 0) {
      console.log("set cv & photo null");
      req.cv = null;
      req.photo = null;
    } else {
      console.log("insert cv and/or photo");
      const entity_id = fields[0].value;
      const prog_id = fields[4].value;
      const education_id = req.usdu_id;

      const mediaId = {
        cv: fields[2].value,
        photo: fields[3].value,
      };

      const mediaData = {
        cv: null,
        photo: null,
      };

      for (const file of files) {
        const data = await userMediaData(
          entity_id,
          prog_id,
          education_id,
          mediaId[file.fieldName],
          file,
          file.fieldName
        );
        mediaData[file.fieldName] = data;
      }

      const media = {
        cv: null,
        photo: null,
      };

      for (const key in mediaData) {
        if (mediaData[key] !== null) {
          if (mediaId[key] === "") {
            media[key] = await req.context.models.users_media.create(
              mediaData[key]
            );
          } else {
            media[key] = await req.context.models.users_media.update(
              mediaData[key],
              {
                returing: true,
                where: { usme_id: mediaId[key], usme_entity_id: entity_id },
              }
            );
          }
        }
      }

      req.cv = media.cv;
      req.photo = media.photo;
    }
    next();
  } catch (error) {
    console.log("User Media Error");
    console.log(error);
    return res.status(404).send(error);
  }
};

const userMediaData = async (
  entity_id,
  prog_id,
  education_id,
  usme_id,
  files,
  type
) => {
  try {
    console.log("usdu_id " + education_id);
    const dataType = {
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        "word",
      "application/msword": "word",
      "application/pdf": "pdf",
      "image/jpeg": "jpg",
      "image/png": "jpg",
      "image/jpeg": "jpg",
    };
    const path = process.cwd() + "/storages/";
    const fileExt = files.file.newFilename.split(".")[1];
    const newName = `${type}_${entity_id}_${prog_id}_${education_id}.${fileExt}`;
    const oldPath = `${path}${files.file.newFilename}`;
    const newPath = `${path}${newName}`;

    await fsPromise.rename(oldPath, newPath);

    let link = `${config.URL_API}/images/${newName}`;
    if (type === "cv") {
      link = `${config.URL_API}/cv/${newName}`;
    }

    const fileType = dataType[files.file.mimetype];

    const data = {
      usme_file_link: link,
      usme_filename: newName,
      usme_filesize: files.file.size,
      usme_filetype: fileType,
      usme_modified_date: new Date(),
    };
    if (usme_id === "") {
      data.usme_entity_id = entity_id;
    }
    return data;
  } catch (error) {
    throw error;
  }
};

export { getUserMedia, setUserMedia };
