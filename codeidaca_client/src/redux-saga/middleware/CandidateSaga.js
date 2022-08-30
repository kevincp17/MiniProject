import {
    call,put
} from 'redux-saga/effects'

import apiBatch from '../../api/api-batch'
import {
    doGetCandidateSucceed,
    doGetCandidateFailed,
} from '../actions/Candidate'

function* handleGetCandidate(){
    try {
        const result = yield call(apiBatch.candidateList)
        yield put(doGetCandidateSucceed(result))
    } catch (error) {
        yield put(doGetCandidateFailed(error))
    }
}
export{
    handleGetCandidate
}