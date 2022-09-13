import * as ActionType from '../constants/Batch'

export const GetBatchRequest = () => ({
  type : ActionType.GET_BATCH_REQUEST
})

export const GetBatchSuccess = (payload) => ({
  type : ActionType.GET_BATCH_SUCCESS,
  payload
})

export const GetBatchFailed = (payload) => ({
  type : ActionType.GET_BATCH_FAILED,
  payload
})

export const AddBatchRequest = (payload) => ({
  type:ActionType.ADD_BATCH_REQUEST,
  payload
})

export const AddBatchSuccess = (payload) => ({
  type:ActionType.ADD_BATCH_SUCCESS,
  payload
})

export const AddBatchFailed = (payload) =>({
  type : ActionType.ADD_BATCH_FAILED,
  payload
})
