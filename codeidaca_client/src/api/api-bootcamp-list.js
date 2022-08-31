import axios from "axios";
import config from "../config/config";

const getListBootcamp = async()=>{
    try {
        const result = await axios.get(`${config.domain}/bootcamp_list`)
        return result.data
    } catch (error) {
        return await error.message
    }
}

export default {
    getListBootcamp
}