import axios from 'axios';
import config from '../config/config';

const get = async (id) => {
    // console.log('id')
    // console.log(id)
    try {
        const result = await axios.get(`${config.domain}/bootcamp-program/${id}`)
        console.log('result api')
        console.log(result)
        return result
    } catch (error) {
        // console.log('error api')
        // console.log(error)
        return await error
    }
}

const search = async (payload) => {
    const { progType, progTitle } = payload
    try {
        const result = await axios.get(`${config.domain}/bootcamp-program/search/${progType}/${progTitle}`)
        return result
    } catch (error) {
        return await error
    }
}

export default { get, search }