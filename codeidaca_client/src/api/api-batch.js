import axios from 'axios'
import config from '../config/config'

const findBatchName = async () => {
	try {
		const result = await axios.get(`${config.domain}/batch/`)
		return result.data
	} catch (error) {
		return await error.message
	}
}

const create = async(payload)=>{
  try {
    const result = await axios.post(`${config.domain}/batch/`,payload)
    return result
  } catch (error) {
    return await error.message
  }
}

export default { findBatchName, create }