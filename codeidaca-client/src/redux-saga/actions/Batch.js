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

export const DelBatchRequest = (payload) => ({
    type:ActionType.DEL_BATCH_REQUEST,
    payload
})

export const DelBatchSuccess = (payload) => ({
    type:ActionType.DEL_BATCH_SUCCESS,
    payload
})

export const DelBatchFailed = (payload) =>({
    type : ActionType.DEL_BATCH_FAILED,
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

export const GetOneBatchRequest = (payload) => ({
    type : ActionType.GETONE_BATCH_REQUEST,
    payload
})

export const GetOneBatchSuccess = (payload) => ({
    type : ActionType.GETONE_BATCH_SUCCESS,
    payload
})

export const GetOneBatchFailed = (payload) => ({
    type : ActionType.GETONE_BATCH_FAILED,
    payload
})

export const EditBatchRequest = (payload) => ({
    type:ActionType.EDIT_BATCH_REQUEST,
    payload
})

export const EditBatchSuccess = (payload) => ({
    type:ActionType.EDIT_BATCH_SUCCESS,
    payload
})

export const EditBatchFailed = (payload) =>({
    type : ActionType.EDIT_BATCH_FAILED,
    payload
})

export const EditNoBatchRequest = (payload) => ({
    type:ActionType.EDITNOFILE_BATCH_REQUEST,
    payload
})

export const EditNoBatchSuccess = (payload) => ({
    type:ActionType.EDITNOFILE_BATCH_SUCCESS,
    payload
})

export const EditNoBatchFailed = (payload) =>({
    type : ActionType.EDITNOFILE_BATCH_FAILED,
    payload
})