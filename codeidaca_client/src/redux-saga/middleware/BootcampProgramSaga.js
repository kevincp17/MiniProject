import { call, put } from 'redux-saga/effects'
import apiBootcampProgram from '../../api/api-bootcampProgram'
import { GetBootcampProgramSucceed, GetBootcampProgramFailed, GetSearchProgramSucceed, GetSearchProgramFailed } from '../actions/BootcampProgram'

function* handleGetBootcampProgram(data) {
    const { payload } = data
    console.log('data payload')
    console.log(data)
    try {
        const result = yield call(apiBootcampProgram.get, payload)
        console.log('result payload')
        console.log(result)
        // if (result instanceof Error) {
        //     throw result
        // }
        if (result?.status !== 200) throw result
        // yield put(GetBootcampProgramSucceed(result))
        yield put(GetBootcampProgramSucceed(result.data))
    } catch (error) {
        yield put(GetBootcampProgramFailed)
        console.log('error')
        console.log(error)
    }
}

function* handleSearchProgram(data) {
    const { payload } = data
    console.log('data')
    console.log(data)
    try {
        const result = yield call(apiBootcampProgram.search, payload)
        yield put(GetSearchProgramSucceed(result.data))
    } catch (error) {
        yield put(GetSearchProgramFailed)
    }
}

export {
    handleGetBootcampProgram,
    handleSearchProgram
}