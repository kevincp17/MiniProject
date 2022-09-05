import { sequelize } from "../models/init-models";

const modulesView = async (req, res) => {
  try {
    const modules = await req.context.models.modules.findAll({
      include: [
        {
          all: true,
        },
      ],
    });
    return res.send(modules);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const routeActionsView = async (req, res) => {
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
    const modules = await req.context.models.modules.findOne({
      where: { module_name: req.params.name },
    });
    return res.send(modules);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const create = async (req, res) => {
  try {
    const modules = await req.context.models.modules.create({
      module_name: req.body.module_name,
    });
    return res.send(modules);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const update = async (req, res) => {
  try {
    const modules = await req.context.models.modules.update(
      {
        module_name: req.body.module_name,
      },
      { returning: true, where: { module_name: req.params.name } }
    );
    return res.send(modules);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const modules = await req.context.models.modules.destroy({
      where: { module_name: req.params.name },
    });
    return res.send(`delete  ${modules} rows`);
  } catch (error) {
    return res.status(404).send(error);
  }
};

export default {
  modulesView,
  routeActionsView,
  findOne,
  create,
  update,
  deleted,
};
