import { call, put } from 'redux-saga/effects'
import apiCandidate from '../../api/candidate'
import { GetCandidateSuccessDisqulified, GetCandidateFailedDisqulified } from '../actions/CandidateDisqualifiedAction'

function* handleGetCandidateDisqualified() {
    try {
        const result = yield call(apiCandidate.disqualified)
        yield put(GetCandidateSuccessDisqulified(result))
    } catch (error) {
        yield put(GetCandidateFailedDisqulified(error))
    }
}

export {
    handleGetCandidateDisqualified
}