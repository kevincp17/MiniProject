import axios from "axios";
import config from "../config/config";

const list = async()=> {
    
    try {
        const result = await axios.get(`${config.domain}/batch/evaluation/cari/aua`) 
        return result.data   
    } catch (error) {
        return await error.message  
    }

}

const create = async(payload)=>{
    try {
        //  for (var pair of payload.entries()) {
        //      console.log(pair[0]+ ' - ' + pair[1]); 
        //  }
        const result = await axios.post(`${config.domain}/batch/evaluation`,payload) 
        // console.log(result.data)
        return result.data
    } catch (error) {
        return await error.message
    }
}

const findOne = async(id)=>{
    try {
        // const result = await axios.get(`${config.domain}/batch/evaluation/a/${id}`)
        const result = await axios.get(`${config.domain}/batch/evaluation/${id}`)
        return result.data
    } catch (error) {
        return error
    }
}

const findOne1 = async(id)=>{
    try {
        const result = await axios.get(`${config.domain}/batch/evaluation/a/${id}`)
        return result.data
    } catch (error) {
        return error
    }
}


export default {list,create,findOne,findOne1,}

