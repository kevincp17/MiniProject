import { call, put } from 'redux-saga/effects'
import apiCandidate from '../../api/candidate'
import { GetCandidateSuccess, GetCandidateFailed, GetOneCandidateSuccess, GetOneCandidateFailed, EditCandidateSuccess, EditCandidateFailed } from '../actions/CandidateAction'

function* handleGetCandidate() {
    try {
        const result = yield call(apiCandidate.apply)
        yield put(GetCandidateSuccess(result))
    } catch (error) {
        yield put(GetCandidateFailed(error))
    }
}

function* handleGetOneCandidate(action) {
    const { payload } = action
    // console.log('action payload')
    // console.log(action)
    try {
        const result = yield call(apiCandidate.findOne, payload)
        yield put(GetOneCandidateSuccess(result))
    } catch (error) {
        yield put(GetOneCandidateFailed(error))
    }
}

function* handleEditCandidate(action) {
    const { payload } = action
    console.log('action payload')
    console.log(action)
    try {
        const result = yield call(apiCandidate.update, payload)
        yield put(EditCandidateSuccess(result.data[1]))
    } catch (error) {
        yield put(EditCandidateFailed(error))
    }
}

export {
    handleGetCandidate,
    handleGetOneCandidate,
    handleEditCandidate
}