import { call, put } from 'redux-saga/effects'
import apiCandidate from '../../api/candidate'
import { GetCandidateSuccessContracted, GetCandidateFailedContracted, EditCandidateSuccessContracted, EditCandidateFailedContracted } from '../actions/CandidateContractedAction'

function* handleGetCandidateContracted() {
    try {
        const result = yield call(apiCandidate.contracted)
        yield put(GetCandidateSuccessContracted(result))
    } catch (error) {
        yield put(GetCandidateFailedContracted(error))
    }
}

function* handleEditCandidateContracted(action) {
    const { payload } = action
    try {
        const result = yield call(apiCandidate.update, payload)
        yield put(EditCandidateSuccessContracted(result))
    } catch (error) {
        yield put(EditCandidateFailedContracted(error))
    }
}

export {
    handleGetCandidateContracted,
    handleEditCandidateContracted
}