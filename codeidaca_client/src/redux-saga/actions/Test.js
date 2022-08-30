import * as ActionType from '../constants/Test'

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
