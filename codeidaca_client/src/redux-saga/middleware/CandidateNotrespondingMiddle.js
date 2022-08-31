import { call, put } from 'redux-saga/effects'
import apiCandidate from '../../api/candidate'
import { GetCandidateSuccessNotresponding, GetCandidateFailedNotresponding } from '../actions/CandidateNotrespondingAction'

function* handleGetCandidateNotresponding() {
    try {
        const result = yield call(apiCandidate.notResponding)
        yield put(GetCandidateSuccessNotresponding(result))
    } catch (error) {
        yield put(GetCandidateFailedNotresponding(error))
    }
}

export {
    handleGetCandidateNotresponding
}