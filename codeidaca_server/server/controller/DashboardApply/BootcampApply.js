const getBootcampApply = async (req, res, next) => {
  console.log("get bootcamp apply");
  try {
    const bootcampApply = await req.context.models.bootcamp_apply.findOne({
      where: {
        boap_prog_id: req.query.prog_id,
        boap_entity_id: req.user.user_entity_id,
      },
    });
    req.bootcampApply = bootcampApply;
    next();
  } catch (error) {
    console.log("Get Bootcamp Apply Error");
    console.log(error);
    return res.status(404).send(error);
  }
};

const setBootcampApply = async (req, res, next) => {
  console.log("set bootcamp apply");
  const { files, fields } = req.fileAttrb;
  try {
    const entity_id = fields[0].value;
    const prog_id = fields[4].value;
    let apply;
    apply = await req.context.models.bootcamp_apply.findOne({
      where: { boap_prog_id: prog_id, boap_entity_id: entity_id },
    });

    if (apply === null) {
      apply = await req.context.models.bootcamp_apply.create({
        boap_prog_id: prog_id,
        boap_entity_id: entity_id,
        boap_modified_date: new Date(),
      });
    }
    req.bootcamp_apply = apply;
    next();
  } catch (error) {
    console.log("Bootcamp Error");
    console.log(error);
    return res.status(404).send(error);
  }
};

export { getBootcampApply, setBootcampApply };
