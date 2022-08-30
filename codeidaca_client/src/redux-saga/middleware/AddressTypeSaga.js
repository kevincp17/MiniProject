import {call,put} from 'redux-saga/effects'
import apiAddressType from '../../api/api-address_type'
import { GetAddressTypeSuccess,GetAddressTypeFailed, DelAddressTypeSuccess, DelAddressTypeFailed, AddAddressTypeSuccess, AddAddressTypeFailed,GetOneAddressTypeSuccess,GetOneAddressTypeFailed,EditAddressTypeSuccess,EditAddressTypeFailed } from '../actions/AddressType'


function* handleGetAddressType(){
    try {
        const result = yield call(apiAddressType.list)
        yield put(GetAddressTypeSuccess(result))
    } catch (error) {
        yield put(GetAddressTypeFailed(error))
    }
}

function* handleDelAddressType(action){
    const{payload} = action
    try {
        const result = yield call(apiAddressType.deleted,payload)
        yield put(DelAddressTypeSuccess(result))
    } catch (error) {
        yield put(DelAddressTypeFailed(error))
    }
}

function* handleAddAddressType(action){
    const {payload} = action
    try {
        const result = yield call(apiAddressType.create,payload)
        yield put(AddAddressTypeSuccess(result.data))
    } catch (error) {
        yield put(AddAddressTypeFailed(error))
    }
}

function* handleGetOneAddressType(action){
    const {payload} = action
    try {
        const result = yield call(apiAddressType.findOne,payload)
        yield put(GetOneAddressTypeSuccess(result))
    } catch (error) {
        yield put(GetOneAddressTypeFailed(error))
    }
}

function* handleEditAddressType(action){
    const {payload} = action
    try {
        const result = yield call(apiAddressType.update, payload)
        yield put (EditAddressTypeSuccess(result.data[1]))
    } catch (error) {
        yield put (EditAddressTypeFailed(error))
    }
}

export {
    handleGetAddressType,
    handleDelAddressType,
    handleAddAddressType,
    handleGetOneAddressType,
    handleEditAddressType
}