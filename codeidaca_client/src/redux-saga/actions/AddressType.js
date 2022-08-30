import * as ActionType from '../constants/AddressType'

export const GetAddressTypeRequest = () => ({
    type : ActionType.GET_ADDRESSTYPE_REQUEST
})

export const GetAddressTypeSuccess = (payload) => ({
    type : ActionType.GET_ADDRESSTYPE_SUCCESS,
    payload
})

export const GetAddressTypeFailed = (payload) => ({
    type : ActionType.GET_ADDRESSTYPE_FAILED,
    payload
})

export const DelAddressTypeRequest = (payload) => ({
    type:ActionType.DEL_ADDRESSTYPE_REQUEST,
    payload
})

export const DelAddressTypeSuccess = (payload) => ({
    type:ActionType.DEL_ADDRESSTYPE_SUCCESS,
    payload
})

export const DelAddressTypeFailed = (payload) =>({
    type : ActionType.DEL_ADDRESSTYPE_FAILED,
    payload
})

export const AddAddressTypeRequest = (payload) => ({
    type:ActionType.ADD_ADDRESSTYPE_REQUEST,
    payload
})

export const AddAddressTypeSuccess = (payload) => ({
    type:ActionType.ADD_ADDRESSTYPE_SUCCESS,
    payload
})

export const AddAddressTypeFailed = (payload) =>({
    type : ActionType.ADD_ADDRESSTYPE_FAILED,
    payload
})

export const GetOneAddressTypeRequest = (payload) => ({
    type : ActionType.GETONE_ADDRESSTYPE_REQUEST,
    payload
})

export const GetOneAddressTypeSuccess = (payload) => ({
    type : ActionType.GETONE_ADDRESSTYPE_SUCCESS,
    payload
})

export const GetOneAddressTypeFailed = (payload) => ({
    type : ActionType.GETONE_ADDRESSTYPE_FAILED,
    payload
})

export const EditAddressTypeRequest = (payload) => ({
    type:ActionType.EDIT_ADDRESSTYPE_REQUEST,
    payload
})

export const EditAddressTypeSuccess = (payload) => ({
    type:ActionType.EDIT_ADDRESSTYPE_SUCCESS,
    payload
})

export const EditAddressTypeFailed = (payload) =>({
    type : ActionType.EDIT_ADDRESSTYPE_FAILED,
    payload
})