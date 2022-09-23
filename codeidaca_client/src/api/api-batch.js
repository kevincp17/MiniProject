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

const batchList = async()=>{
  try {
      const result = await axios.get(`${config.domainApi}/batch`)
      return result.data
  } catch (error) {
      return await error.message
      
  }
}

const findOneBatch = async(id)=>{
  try {
      const result = await axios.get(`${config.domainApi}/batch/${id}`)
      return result.data;
  } catch (error) {
      return await error.message
  }
}

const updateBatch = async(data)=>{
  try {
      const result = await axios.put(`${config.domainApi}/batch/${data.batch_id}`,data)
      return result
  } catch (error) {
      return await error.message
  }
}

const instructorList = async()=>{
  try {
      const result = await axios.get(`${config.domainApi}/instructor`)
      return result.data
      
  } catch (error) {
      return await error.message
  }
}

const candidateList = async()=>{
  try {
      const result = await axios.get(`${config.domainApi}/candidate`)
      return result.data
  } catch (error) {
      return await error.message
  }
}
const talentList = async(id)=>{
  try {
      const result = await axios.get(`${config.domainApi}/talent/${id}`)
      return result.data
  } catch (error) {
      return await error.message
  }
}

const programList = async()=>{
  try {
      const result = await axios.get(`${config.domainApi}/program`)
      return result.data
  } catch (error) {
      return await error.message
      
  }
}

export default { findBatchName, create,
  batchList,
  findOneBatch,
  updateBatch,
  instructorList,
  candidateList,
  programList,
  talentList }