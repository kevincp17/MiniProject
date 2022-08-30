import * as ActionType from '../constants/Batch'

export const doGetBatchRequest =(payload)=>({
    type : ActionType.GET_BATCH_REQUEST,
    payload
})

export const doGetBatchSucceed =(payload)=>({
    type : ActionType.GET_BATCH_SUCCEED,
    payload
})

export const doGetBatchFailed =(payload)=>({
    type : ActionType.GET_BATCH_FAILED,
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

