import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
  try {
    const routeActions = await req.context.models.route_actions.findAll({
      include: [
        {
          all: true,
        },
      ],
    });
    return res.send(routeActions);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const routeActions = await req.context.models.route_actions.findOne({
      where: { roac_id: req.params.id },
    });
    return res.send(routeActions);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const create = async (req, res) => {
  try {
    const routeActions = await req.context.models.route_actions.create({
      roac_id: req.body.roac_id,
      roac_name: req.body.roac_name,
      roac_orderby: req.body.roac_orderby,
      roac_display: req.body.roac_display,
      roac_module_name: req.body.roac_module_name,
    });
    return res.send(routeActions);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const update = async (req, res) => {
  try {
    const routeActions = await req.context.models.route_actions.update(
      {
        roac_id: req.body.roac_id,
        roac_name: req.body.roac_name,
        roac_orderby: req.body.roac_orderby,
        roac_display: req.body.roac_display,
        roac_module_name: req.body.roac_module_name,
      },
      { returning: true, where: { roac_id: req.params.id } }
    );
    return res.send(routeActions);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const routeActions = await req.context.models.route_actions.destroy({
      where: { roac_id: req.params.id },
    });
    return res.send(`delete  ${routeActions} rows`);
  } catch (error) {
    return res.status(404).send(error);
  }
};
// const deleted = async (req, res) => {
//   try {
//     const routeActions = await req.context.models.route_actions.destroy({
//       where: { roac_name: req.params.id },
//     });
//     return res.send(`delete  ${routeActions} rows`);
//   } catch (error) {
//     return res.status(404).send(error);
//   }
// };

export default {
  findAll,
  findOne,
  create,
  update,
  deleted,
};
