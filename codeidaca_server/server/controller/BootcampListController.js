import config from "../config/config";

const getPrograms = async (req, res) => {
  try {
    const course = await req.context.models.program_entity.findAll({
      where: { prog_type: "bootcamp" },
    });
    return res.send(course);
  } catch (error) {
    return res.status(404).send(error);
  }
};

export default {
  getPrograms,
};
