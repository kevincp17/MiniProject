import {
    call,put
} from 'redux-saga/effects'

import apiBatch from '../../api/api-batch'

import {
    doGetBatchSucceed,
    doGetBatchFailed,
    doGetBatchIdSucceed,
    doGetBatchIdFailed,
    doUpdateBatchSucceed,
    doUpdateBatchFailed
} from '../actions/Batch'

function* handleGetBatch(){
        try {
            const result = yield call(apiBatch.batchList);
            yield put(doGetBatchSucceed(result))        
        } catch (error) {
            yield put(doGetBatchFailed(error));
        }
}

function* handleGetBatchId(action){
    let {payload} = action
    try {
        const result_batch = yield call(apiBatch.findOneBatch,payload)
        const result_talent = yield call(apiBatch.talentList,payload)
        const result_candidate = yield call(apiBatch.candidateList)
        const result_instructor = yield call(apiBatch.instructorList)
        const result_program = yield call(apiBatch.programList)
        payload = {
            batch : result_batch,
            talents : result_talent,
            candidates : result_candidate,
            instructors : result_instructor,
            programs : result_program
        }
        yield put(doGetBatchIdSucceed(payload))
    } catch (error) {
        yield put(doGetBatchIdFailed(error))
    }
}

function* handleUpdateBatch(action) {
    const {payload} = action;
    try {
        const result1= yield call(apiBatch.updateBatch,payload);
        const result = yield call(apiBatch.batchList);
       yield put(doUpdateBatchSucceed(result1));
    } catch (error) {
        yield put(doUpdateBatchFailed(error));
    }
}

export{
    handleGetBatch,
    handleGetBatchId,
    handleUpdateBatch
}