import axios from 'axios'
import config from '../config/config'

const apply = async () => {
    try {
        const result = await axios.get(`${config.domain}/candidate/apply`)
        return result.data
    } catch (error) {
        return await error.message
    }
}

const filtering = async () => {
    try {
        const result = await axios.get(`${config.domain}/candidate/filtering`)
        return result.data
    } catch (error) {
        return await error.message
    }
}

const contracted = async () => {
    try {
        const result = await axios.get(`${config.domain}/candidate/contracted`)
        return result.data
    } catch (error) {
        return await error.message
    }
}

const disqualified = async () => {
    try {
        const result = await axios.get(`${config.domain}/candidate/disqualified`)
        return result.data
    } catch (error) {
        return await error.message
    }
}

const notResponding = async () => {
    try {
        const result = await axios.get(`${config.domain}/candidate/not-responding`)
        return result.data
    } catch (error) {
        return await error.message
    }
}

const findOne = async (id) => {
    try {
        const result = await axios.get(`${config.domain}/candidate/id/${id}`)
        return result.data
    } catch (error) {
        return error
    }
}

const findOneFiltering = async (id) => {
    try {
        const result = await axios.get(`${config.domain}/candidate/filtering/${id}`)
        return result.data
    } catch (error) {
        return error
    }
}

const findOneContract = async (id) => {
    try {
        const result = await axios.get(`${config.domain}/candidate/contracted/${id}`)
        return result.data
    } catch (error) {
        return error
    }
}

const findOneDisqualified = async (id) => {
    try {
        const result = await axios.get(`${config.domain}/candidate/disqualified/${id}`)
        return result.data
    } catch (error) {
        return error
    }
}

const findOneNotResponding = async (id) => {
    try {
        const result = await axios.get(`${config.domain}/candidate/not-responding/${id}`)
        return result.data
    } catch (error) {
        return error
    }
}

const update = async (data) => {
    const boap_entity_id = data.boap_entity_id
    try {
        const result = await axios.put(`${config.domain}/candidate/update/id/${boap_entity_id}`, data)
        return result
    } catch (error) {
        return error
    }
}

export default { apply, filtering, contracted, disqualified, notResponding, update, findOne, findOneFiltering, findOneContract, findOneDisqualified, findOneNotResponding }