import {call,put} from 'redux-saga/effects'
import apiProvince from '../../api/api-province'
import { GetProvinceSuccess,GetProvinceFailed, DelProvinceSuccess, DelProvinceFailed, AddProvinceSuccess, AddProvinceFailed,GetOneProvinceSuccess,GetOneProvinceFailed,EditProvinceSuccess,EditProvinceFailed } from '../actions/Province'


function* handleGetProvince(){
    try {
        const result = yield call(apiProvince.list)
        yield put(GetProvinceSuccess(result))
    } catch (error) {
        yield put(GetProvinceFailed(error))
    }
}

function* handleDelProvince(action){
    const{payload} = action
    try {
        const result = yield call(apiProvince.deleted,payload)
        yield put(DelProvinceSuccess(result))
    } catch (error) {
        yield put(DelProvinceFailed(error))
    }
}

function* handleAddProvince(action){
    const {payload} = action
    try {
        const result = yield call(apiProvince.create,payload)
        yield put(AddProvinceSuccess(result.data))
    } catch (error) {
        yield put(AddProvinceFailed(error))
    }
}

function* handleGetOneProvince(action){
    const {payload} = action
    try {
        const result = yield call(apiProvince.findOne,payload)
        yield put(GetOneProvinceSuccess(result))
    } catch (error) {
        yield put(GetOneProvinceFailed(error))
    }
}

function* handleEditProvince(action){
    const {payload} = action
    try {
        const result = yield call(apiProvince.update, payload)
        yield put (EditProvinceSuccess(result.data[1]))
    } catch (error) {
        yield put (EditProvinceFailed(error))
    }
}

export {
    handleGetProvince,
    handleDelProvince,
    handleAddProvince,
    handleGetOneProvince,
    handleEditProvince
}