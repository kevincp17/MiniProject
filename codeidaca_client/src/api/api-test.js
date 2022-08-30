import axios from 'axios';
import config from '../config/config';

const test = async () => {
    try {
        const result = await axios.get(`${config.domain}/test/`)
        return result.data
    } catch (error) {
        return await error.message
    }
}

const list = async () => {
    try {
        const result = await axios.get(`${config.domain}/list/`)
        return result.data
    } catch (error) {
        return await error.message
    }
}


const findOne = async (id) => {
    try {
        const result = await axios.get(`${config.domain}/list/${id}`)
        return result.data
    } catch (error) {
        return error
    }
}


const update = async (data) => {
    const bast_entity_id = data.bast_entity_id
    try {
        const result = await axios.put(`${config.domain}/list/${bast_entity_id}`, data)
        return result
    } catch (error) {
        return error
    }
}

export default {
    test,
    list,
    findOne,
    update
}
