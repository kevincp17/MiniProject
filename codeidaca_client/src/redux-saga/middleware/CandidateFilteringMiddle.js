import { call, put } from 'redux-saga/effects'
import apiCandidate from '../../api/candidate'
import { GetCandidateSuccessFiltering, GetCandidateFailedFiltering } from '../actions/CandidateFilteringAction'

function* handleGetCandidateFiltering() {
    try {
        const result = yield call(apiCandidate.filtering)
        yield put(GetCandidateSuccessFiltering(result))
    } catch (error) {
        yield put(GetCandidateFailedFiltering(error))
    }
}

export {
    handleGetCandidateFiltering
}