import axios from "axios";
import config from "../config/config";

const list = async () => {
  try {
    const result = await axios.get(`${config.domain}/modules/`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

const findOne = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/modules/${id}`);
    //console.log(result);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

const create = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/modules/`, payload);
    return result;
  } catch (error) {
    return await error.message;
    //return await console.log(payload), error.message;
  }
};

const update = async (data) => {
  const moduleName = data.id;
  try {
    const result = await axios.put(
      `${config.domain}/modules/${moduleName}`,
      data
    );
    // console.log(moduleName);
    // console.log(data);
    return result;
  } catch (error) {
    return error;
  }
};

// const update = async (data) => {

//   try {
//     const result = await axios.put(
//       `${config.domain}/modules/${data.modules_name}`,
//       data
//     );
//     return result;
//   } catch (error) {
//     return error;
//   }
// };

const deleted = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/modules/${id}`);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const exportedObject = { list, create, deleted, findOne, update };
export default exportedObject;

//export default { list, create, deleted, findOne, update };
