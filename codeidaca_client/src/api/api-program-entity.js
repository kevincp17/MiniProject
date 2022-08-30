import axios from 'axios'
import config from '../config/config'

const listFour = async()=>{
    try {
        const result = await axios.get(`${config.domain}/program_entity/showFour`)
        return result.data
    } catch (error) {
        return await error.message
    }
}

const listThree = async()=>{
    try {
        const result = await axios.get(`${config.domain}/program_entity/showThree`)
        return result.data
    } catch (error) {
        return await error.message
    }
}

const listSix = async()=>{
    try {
        const result = await axios.get(`${config.domain}/program_entity/alumniTestimony`)
        return result.data
    } catch (error) {
        return await error.message
    }
}

const image = async(id)=>{
    try {
        const result = await axios.get(`${config.domain}/program_entity/images/${id}`)
        return result.data
    } catch (error) {
        return await error.message
    }
}

export default {listFour,listThree,listSix,image}