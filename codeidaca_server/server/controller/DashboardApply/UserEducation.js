const getUserEducation = async (req, res, next) => {
  console.log("get user education");
  try {
    let userEducation = [];
    const cv = req.userMedia.cv;

    if (cv !== null) {
      const education_id = cv.usme_filename.split("_")[3].split(".")[0];
      const result = await req.context.models.users_education.findOne({
        where: { usdu_entity_id: req.user.user_entity_id, usdu_id: education_id },
      });
      userEducation[0] = result;
    } else {
      userEducation = await req.context.models.users_education.findAll({
        where: { usdu_entity_id: req.user.user_entity_id },
      });
    }

    req.userEducation = userEducation;
    next();
  } catch (error) {
    console.log("Get User Education Error");
    console.log(error);
    return res.status(404).send(error);
  }
};

const setUsersEducation = async (req, res, next) => {
  console.log("set users education");
  const { files, fields } = req.fileAttrb;
  try {
    const usdu_entity_id = fields[0].value;
    const usdu_id = fields[1].value;
    let education_id;
    let userEducation;
    if (usdu_id === "") {
      userEducation = await req.context.models.users_education.create({
        usdu_entity_id: usdu_entity_id,
        usdu_school: fields[9].value,
        usdu_field_study: fields[10].value,
        usdu_degree: fields[11].value,
        usdu_modified_date: new Date(),
      });
      education_id = userEducation.usdu_id;
    } else {
      userEducation = await req.context.models.users_education.update(
        {
          usdu_school: fields[9].value,
          usdu_field_study: fields[10].value,
          usdu_degree: fields[11].value,
          usdu_modified_date: new Date(),
        },
        {
          returing: true,
          where: { usdu_id: usdu_id, usdu_entity_id: usdu_entity_id },
        }
      );
      education_id = usdu_id;
    }
    req.users_education = userEducation;
    req.usdu_id = education_id;
    // console.log("userEducation");
    // console.log(req.users_education);
    next();
  } catch (error) {
    console.log("User Education Error");
    console.log(error);
    return res.status(404).send(error);
  }
};

export { getUserEducation, setUsersEducation };
