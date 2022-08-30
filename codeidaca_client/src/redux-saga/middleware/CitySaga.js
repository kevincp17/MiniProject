import {call,put} from 'redux-saga/effects'
import apiCity from '../../api/api-city'
import { GetCitySuccess,GetCityFailed, DelCitySuccess, DelCityFailed, AddCitySuccess, AddCityFailed,GetOneCitySuccess,GetOneCityFailed,EditCitySuccess,EditCityFailed } from '../actions/City'


function* handleGetCity(){
    try {
        const result = yield call(apiCity.list)
        yield put(GetCitySuccess(result))
    } catch (error) {
        yield put(GetCityFailed(error))
    }
}

function* handleDelCity(action){
    const{payload} = action
    try {
        const result = yield call(apiCity.deleted,payload)
        yield put(DelCitySuccess(result))
    } catch (error) {
        yield put(DelCityFailed(error))
    }
}

function* handleAddCity(action){
    const {payload} = action
    try {
        const result = yield call(apiCity.create,payload)
        yield put(AddCitySuccess(result.data))
    } catch (error) {
        yield put(AddCityFailed(error))
    }
}

function* handleGetOneCity(action){
    const {payload} = action
    try {
        const result = yield call(apiCity.findOne,payload)
        yield put(GetOneCitySuccess(result))
    } catch (error) {
        yield put(GetOneCityFailed(error))
    }
}

function* handleEditCity(action){
    const {payload} = action
    try {
        const result = yield call(apiCity.update, payload)
        yield put (EditCitySuccess(result.data[1]))
    } catch (error) {
        yield put (EditCityFailed(error))
    }
}

export {
    handleGetCity,
    handleDelCity,
    handleAddCity,
    handleGetOneCity,
    handleEditCity
}