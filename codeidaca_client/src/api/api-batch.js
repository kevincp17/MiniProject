import axios from "axios";
import config from "../config/config";

const batchList = async()=>{
    try {
        const result = await axios.get(`${config.domain}/batch`)
        return result.data
    } catch (error) {
        return await error.message
        
    }
}

const findOneBatch = async(id)=>{
    try {
        const result = await axios.get(`${config.domain}/batch/${id}`)
        return result.data;
    } catch (error) {
        return await error.message
    }
}

const updateBatch = async(data)=>{
    try {
        const result = await axios.put(`${config.domain}/batch/${data.batch_id}`,data)
        return result
    } catch (error) {
        return await error.message
    }
}

const instructorList = async()=>{
    try {
        const result = await axios.get(`${config.domain}/instructor`)
        return result.data
        
    } catch (error) {
        return await error.message
    }
}

const candidateList = async()=>{
    try {
        const result = await axios.get(`${config.domain}/candidate`)
        return result.data
    } catch (error) {
        return await error.message
    }
}
const talentList = async(id)=>{
    try {
        const result = await axios.get(`${config.domain}/talent/${id}`)
        return result.data
    } catch (error) {
        return await error.message
    }
}

const programList = async()=>{
    try {
        const result = await axios.get(`${config.domain}/program`)
        return result.data
    } catch (error) {
        return await error.message
        
    }
}


export default{
    batchList,
    findOneBatch,
    updateBatch,
    instructorList,
    candidateList,
    programList,
    talentList
}
