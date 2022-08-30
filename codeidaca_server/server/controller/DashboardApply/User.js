const getUser = async (req, res , next) => {
  console.log("get user");
  try {
    const user = await req.context.models.users.findOne({
      attributes: ["user_entity_id", "user_first_name", "user_last_name"],
      where: { user_name: req.query.user_name },
    });

    // const data = {
    //   bootcampApply: req.bootcampApply,
    //   course: req.course,
    //   userMedia: req.userMedia,
    //   userEducation: req.userEducation,
    //   user: user,
    //   progress: req.progress
    // };
    // return res.status(200).send(data);
    req.user = user
    next()
  } catch (error) {
    console.log("Get User Error");
    console.log(error);
    return res.status(404).send(error);
  }
};

const setUser = async (req, res) => {
  console.log("set user");
  const { files, fields } = req.fileAttrb;
  try {
    const user = await req.context.models.users.update(
      {
        user_first_name: fields[5].value,
        user_last_name: fields[6].value,
        user_modified_date: new Date(),
      },
      {
        returing: true,
        where: { user_entity_id: fields[0].value },
      }
    );

    const data = {
      user: user,
      bootcamp_apply: req.bootcamp_apply,
      users_education: req.users_education,
      users_media: {
        cv: req.cv,
        photo: req.photo,
      },
    };

    return res.status(200).send(data);
  } catch (error) {
    console.log("User Error");
    console.log(error);
    return res.status(404).send(error);
  }
};

export {
  getUser,
  setUser,
};
