import axios from "axios";
import config from "../config/config";

const moduleView = async () => {
  try {
    const result = await axios.get(`${config.domain}/modulesMaster/Modules`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

const routeActionsView = async () => {
  try {
    const result = await axios.get(
      `${config.domain}/modulesMaster/routeActions`
    );
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

const create = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/modulesMaster/`, payload);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const findOne = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/modulesMaster/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const update = async (data) => {
  try {
    const result = await axios.put(
      `${config.domain}/modulesMaster/${data.modulesMaster_name}`,
      data
    );
    return result;
  } catch (error) {
    return error;
  }
};

const deleted = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/modulesMaster/${id}`);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const exportedObject = {
  moduleView,
  routeActionsView,
  create,
  deleted,
  findOne,
  update,
};
export default exportedObject;

//export default { list, create, deleted, findOne, update };
