import axios from 'axios';
import config from '../config/config';

const list = async()=>{
    try {
        const result = await axios.get(`${config.domainBatch}/all`)
        return result.data
    } catch (error) {
        return await error.message
    }
}
const findOne = async(id)=>{
    try {
        const result = await axios.get(`${config.domainBatch}/${id}`)
        return result.data
    } catch (error) {
        return error
    }
}
const update = async(data)=>{
    const batch_id = parseInt(data.batch_id);
    try {
        const result = await axios.put(`${config.domainBatch}/${batch_id}`,data)
        return result
    } catch (error) {
        return error
    }
}
const deleted = async(id)=>{
    try {
        const result = await axios.delete(`${config.domainBatch}/${id}`)
        return result
    } catch (error) {
        return await error.message
    }
}

export default {
    list, findOne, update, deleted
}