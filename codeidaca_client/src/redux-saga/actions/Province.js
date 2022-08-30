import * as ActionType from '../constants/Province'

export const GetProvinceRequest = () => ({
    type : ActionType.GET_PROVINCE_REQUEST
})

export const GetProvinceSuccess = (payload) => ({
    type : ActionType.GET_PROVINCE_SUCCESS,
    payload
})

export const GetProvinceFailed = (payload) => ({
    type : ActionType.GET_PROVINCE_FAILED,
    payload
})

export const DelProvinceRequest = (payload) => ({
    type:ActionType.DEL_PROVINCE_REQUEST,
    payload
})

export const DelProvinceSuccess = (payload) => ({
    type:ActionType.DEL_PROVINCE_SUCCESS,
    payload
})

export const DelProvinceFailed = (payload) =>({
    type : ActionType.DEL_PROVINCE_FAILED,
    payload
})

export const AddProvinceRequest = (payload) => ({
    type:ActionType.ADD_PROVINCE_REQUEST,
    payload
})

export const AddProvinceSuccess = (payload) => ({
    type:ActionType.ADD_PROVINCE_SUCCESS,
    payload
})

export const AddProvinceFailed = (payload) =>({
    type : ActionType.ADD_PROVINCE_FAILED,
    payload
})

export const GetOneProvinceRequest = (payload) => ({
    type : ActionType.GETONE_PROVINCE_REQUEST,
    payload
})

export const GetOneProvinceSuccess = (payload) => ({
    type : ActionType.GETONE_PROVINCE_SUCCESS,
    payload
})

export const GetOneProvinceFailed = (payload) => ({
    type : ActionType.GETONE_PROVINCE_FAILED,
    payload
})

export const EditProvinceRequest = (payload) => ({
    type:ActionType.EDIT_PROVINCE_REQUEST,
    payload
})

export const EditProvinceSuccess = (payload) => ({
    type:ActionType.EDIT_PROVINCE_SUCCESS,
    payload
})

export const EditProvinceFailed = (payload) =>({
    type : ActionType.EDIT_PROVINCE_FAILED,
    payload
})