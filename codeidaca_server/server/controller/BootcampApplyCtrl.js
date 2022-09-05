import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
  try {
    const bootcamp_apply = await req.context.models.bootcamp_apply.findAll({
      include: [
        {
          all: true,
        },
      ],
    });
    return res.send(bootcamp_apply);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const bootcamp_apply = await req.context.models.bootcamp_apply.findOne({
      where: { boap_prog_id: req.params.id },
    });
    return res.send(bootcamp_apply);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const create = async (req, res) => {
  try {
    const bootcamp_apply = await req.context.models.bootcamp_apply.create({
      boap_prog_id: req.body.boap_prog_id,
      boap_entity_id: req.body.boap_entity_id,
      boap_total_skor: req.body.boap_total_skor,
      boap_review: req.body.boap_review,
      boap_status: req.body.boap_status,
    });
    return res.send(bootcamp_apply);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const update = async (req, res) => {
  try {
    const bootcamp_apply = await req.context.models.bootcamp_apply.update(
      {
        boap_prog_id: req.body.boap_prog_id,
        boap_entity_id: req.body.boap_entity_id,
        boap_total_skor: req.body.boap_total_skor,
        boap_review: req.body.boap_review,
        boap_status: req.body.boap_status,
      },
      { returning: true, where: { boap_prog_id: req.params.id } }
    );
    return res.send(bootcamp_apply);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const bootcamp_apply = await req.context.models.bootcamp_apply.destroy({
      where: { boap_prog_id: req.params.id },
    });
    return res.send(`delete ${bootcamp_apply} rows`);
  } catch (error) {
    return res.status(404).send(error);
  }
};

export default {
  findAll,
  findOne,
  create,
  update,
  deleted,
};
