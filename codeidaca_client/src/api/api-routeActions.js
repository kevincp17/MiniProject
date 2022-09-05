import axios from "axios";
import config from "../config/config";

const list = async () => {
  try {
    const result = await axios.get(`${config.domain}/routeActions/`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};
const create = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/routeActions/`, payload);
    return result;
  } catch (error) {
    // return await error.message;
    return await console.log(payload);
  }
};
const findOne = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/routeActions/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const update = async (data) => {
  const routeActions_id = data.id;
  try {
    const result = await axios.put(
      `${config.domain}/routeActions/${routeActions_id}`,
      data
    );
    return result;
  } catch (error) {
    return error;
  }
};
const deleted = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/routeActions/${id}`);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const exportedObject = { list, create, deleted, findOne, update };

export default exportedObject;

//export default { list, create, deleted, findOne, update };
