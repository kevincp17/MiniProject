import axios from "axios";
import config from "../config/config";

const getBootcamp = async (id) => {
  try {
    const result = await axios.get(
      `${config.domain}/apply_bootcamp/show?user_name=${id.user_name}&prog_id=${id.prog_entity_id}`
    );

    const data = {
      code: result.status,
      message: result.statusText, 
      data: result.data,
    };

    return data;
  } catch (error) {
    const err = error.toJSON();
    console.log(err);
    const response = {
      code: err.status, 
      message: err.message, 
      data: {},
    };
    return response;
  }
};

const applyBootcamp = async (payload) => {
  try {
    const result = await axios.post(
      `${config.domain}/apply_bootcamp/apply`,
      payload
    );
    const data = {
      code: result.status,
      message: result.statusText,
      data: result.data,
    };
    return data;
  } catch (error) {
    const err = error.toJSON();
    const response = {
      code: err.status,
      message: err.message,
      data: {},
    };
    console.log(err);
    console.log(response);
    return response;
  }
};

export default {
  getBootcamp,
  applyBootcamp,
};
