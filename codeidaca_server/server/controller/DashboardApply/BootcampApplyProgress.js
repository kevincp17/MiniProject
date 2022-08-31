const getBootcampApplyProgress = async (req, res) => {
  console.log("get bootcamp apply progress");
  try {
    const progress = await req.context.models.bootcamp_apply_progress.findAll({
      where: { bapr_prog_id: req.query.prog_id, bapr_entity_id: req.user.user_entity_id },
      include: [
        {
          attributes: ["roac_orderby", "roac_name"],
          model: req.context.models.route_actions,
          as: "bapr_roac",
          where: {
            roac_display: "1",
            roac_module_name: "Bootcamp",
          },
        },
      ],
      order: [
        [
          { model: req.context.models.route_actions, as: "bapr_roac" },
          "roac_orderby",
          "ASC",
        ],
      ],
    });
    const data = {
      bootcampApply: req.bootcampApply,
      course: req.course,
      userMedia: req.userMedia,
      userEducation: req.userEducation,
      user: req.user,
      progress: progress
    };
    return res.status(200).send(data);
  } catch (error) {
    console.log("Get Bootcamp Apply Progress Error");
    console.log(error);
    return res.status(404).send(error);
  }
};

export { getBootcampApplyProgress };
