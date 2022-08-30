import {call,put} from 'redux-saga/effects'
import apiCountry from '../../api/api-country'
import { GetCountrySuccess,GetCountryFailed, DelCountrySuccess, DelCountryFailed, AddCountrySuccess, AddCountryFailed,GetOneCountrySuccess,GetOneCountryFailed,EditCountrySuccess,EditCountryFailed } from '../actions/Country'


function* handleGetCountry(){
    try {
        const result = yield call(apiCountry.list)
        yield put(GetCountrySuccess(result))
    } catch (error) {
        yield put(GetCountryFailed(error))
    }
}

function* handleDelCountry(action){
    const{payload} = action
    try {
        const result = yield call(apiCountry.deleted,payload)
        yield put(DelCountrySuccess(result))
    } catch (error) {
        yield put(DelCountryFailed(error))
    }
}

function* handleAddCountry(action){
    const {payload} = action
    try {
        const result = yield call(apiCountry.create,payload)
        yield put(AddCountrySuccess(result.data))
    } catch (error) {
        yield put(AddCountryFailed(error))
    }
}

function* handleGetOneCountry(action){
    const {payload} = action
    try {
        const result = yield call(apiCountry.findOne,payload)
        yield put(GetOneCountrySuccess(result))
    } catch (error) {
        yield put(GetOneCountryFailed(error))
    }
}

function* handleEditCountry(action){
    const {payload} = action
    try {
        const result = yield call(apiCountry.update, payload)
        yield put (EditCountrySuccess(result.data[1]))
    } catch (error) {
        yield put (EditCountryFailed(error))
    }
}

export {
    handleGetCountry,
    handleDelCountry,
    handleAddCountry,
    handleGetOneCountry,
    handleEditCountry
}