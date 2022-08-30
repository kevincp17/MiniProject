import {call,put} from 'redux-saga/effects'
import apiAddressType from '../../api/api-address_type'
import apiCountry from '../../api/api-country'
import apiProvince from '../../api/api-province'
import apiCity from '../../api/api-city'
import { GetAddressTypeSuccess,GetAddressTypeFailed, DelAddressTypeSuccess, DelAddressTypeFailed, AddAddressTypeSuccess, AddAddressTypeFailed,GetOneAddressTypeSuccess,GetOneAddressTypeFailed,EditAddressTypeSuccess,EditAddressTypeFailed } from '../actions/AddressType'
import { GetCountrySuccess,GetCountryFailed, DelCountrySuccess, DelCountryFailed, AddCountrySuccess, AddCountryFailed,GetOneCountrySuccess,GetOneCountryFailed,EditCountrySuccess,EditCountryFailed } from '../actions/Country'
import { GetProvinceSuccess,GetProvinceFailed, DelProvinceSuccess, DelProvinceFailed, AddProvinceSuccess, AddProvinceFailed,GetOneProvinceSuccess,GetOneProvinceFailed,EditProvinceSuccess,EditProvinceFailed } from '../actions/Province'
import { GetCitySuccess,GetCityFailed, DelCitySuccess, DelCityFailed, AddCitySuccess, AddCityFailed,GetOneCitySuccess,GetOneCityFailed,EditCitySuccess,EditCityFailed } from '../actions/City'

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
    handleGetAddressType,
    handleDelAddressType,
    handleAddAddressType,
    handleGetOneAddressType,
    handleEditAddressType,

    handleGetCountry,
    handleDelCountry,
    handleAddCountry,
    handleGetOneCountry,
    handleEditCountry,

    handleGetProvince,
    handleDelProvince,
    handleAddProvince,
    handleGetOneProvince,
    handleEditProvince,

    handleGetCity,
    handleDelCity,
    handleAddCity,
    handleGetOneCity,
    handleEditCity
}

