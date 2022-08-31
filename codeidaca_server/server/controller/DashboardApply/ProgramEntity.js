const getProgram = async (req, res, next) => {
  console.log("get program");
  try {
    const course = await req.context.models.program_entity.findOne({
      where: { prog_id: req.query.prog_id, prog_type: "bootcamp" },
    });
    req.course = course;

    next();
  } catch (error) {
    console.log("Get Program Error");
    console.log(error);
    return res.status(404).send(error);
  }
};

export { getProgram };
