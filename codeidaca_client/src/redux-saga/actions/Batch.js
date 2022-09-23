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

export const doGetBatchIdRequest =(payload)=>({
  type : ActionType.GET_BATCH_ID_REQUEST,
  payload
})

export const doGetBatchIdSucceed =(payload)=>({
  type : ActionType.GET_BATCH_ID_SUCCEED,
  payload
})

export const doGetBatchIdFailed =(payload)=>({
  type : ActionType.GET_BATCH_ID_FAILED,
  payload
})

export const doUpdateBatchRequest =(payload)=>({
  type : ActionType.UPDATE_BATCH_REQUEST,
  payload
})

export const doUpdateBatchSucceed =(payload)=>({
  type : ActionType.UPDATE_BATCH_SUCCEED,
  payload
})

export const doUpdateBatchFailed =(payload)=>({
  type : ActionType.UPDATE_BATCH_FAILED,
  payload
})
export const doDelBatchRequest = (payload) => ({
  type:ActionType.DEL_BATCH_REQUEST,
  payload
})

export const doDelBatchSuccess = (payload) => ({
  type:ActionType.DEL_BATCH_SUCCESS,
  payload
})

export const doDelBatchFailed = (payload) =>({
  type : ActionType.DEL_BATCH_FAILED,
  payload
})

export const doEditBatchRequest = (payload) => ({
  type:ActionType.EDIT_BATCH_REQUEST,
  payload
})

export const doEditBatchSuccess = (payload) => ({
  type:ActionType.EDIT_BATCH_SUCCESS,
  payload
})

export const doEditBatchFailed = (payload) =>({
  type : ActionType.EDIT_BATCH_FAILED,
  payload
})