import axios from 'axios'
import config from '../config/config'

const list = async()=>{
    try {
        const result = await axios.get(`${config.domain}/province/`)
        return result.data
    } catch (error) {
        return await error.message
    }
}
const create = async(payload)=>{
    try {
        const result = await axios.post(`${config.domain}/province/`,payload)
        return result
    } catch (error) {
        return await error.message
    }
}
const findOne = async(id)=>{
    try {
        const result = await axios.get(`${config.domain}/province/${id}`)
        return result.data
    } catch (error) {
        return error
    }
}
const update = async(data)=>{
    try {
        const result = await axios.put(`${config.domain}/province/${data.prov_id}`,data)
        return result
    } catch (error) {
        return error
    }
}

const deleted = async(id)=>{
    try {
        const result = await axios.delete(`${config.domain}/province/${id}`)
        return result
    } catch (error) {
        return await error.message
    }
}

export default {list,create,deleted,findOne,update}