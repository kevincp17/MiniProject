import * as ActionType from '../constants/City'

export const GetCityRequest = () => ({
    type : ActionType.GET_CITY_REQUEST
})

export const GetCitySuccess = (payload) => ({
    type : ActionType.GET_CITY_SUCCESS,
    payload
})

export const GetCityFailed = (payload) => ({
    type : ActionType.GET_CITY_FAILED,
    payload
})

export const DelCityRequest = (payload) => ({
    type:ActionType.DEL_CITY_REQUEST,
    payload
})

export const DelCitySuccess = (payload) => ({
    type:ActionType.DEL_CITY_SUCCESS,
    payload
})

export const DelCityFailed = (payload) =>({
    type : ActionType.DEL_CITY_FAILED,
    payload
})

export const AddCityRequest = (payload) => ({
    type:ActionType.ADD_CITY_REQUEST,
    payload
})

export const AddCitySuccess = (payload) => ({
    type:ActionType.ADD_CITY_SUCCESS,
    payload
})

export const AddCityFailed = (payload) =>({
    type : ActionType.ADD_CITY_FAILED,
    payload
})

export const GetOneCityRequest = (payload) => ({
    type : ActionType.GETONE_CITY_REQUEST,
    payload
})

export const GetOneCitySuccess = (payload) => ({
    type : ActionType.GETONE_CITY_SUCCESS,
    payload
})

export const GetOneCityFailed = (payload) => ({
    type : ActionType.GETONE_CITY_FAILED,
    payload
})

export const EditCityRequest = (payload) => ({
    type:ActionType.EDIT_CITY_REQUEST,
    payload
})

export const EditCitySuccess = (payload) => ({
    type:ActionType.EDIT_CITY_SUCCESS,
    payload
})

export const EditCityFailed = (payload) =>({
    type : ActionType.EDIT_CITY_FAILED,
    payload
})