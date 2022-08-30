import {call,put} from 'redux-saga/effects'
import apiBatch from '../../api/api-batch'
import { GetBatchSuccess,GetBatchFailed,AddBatchSuccess,AddBatchFailed
    ,DelBatchSuccess,DelBatchFailed,GetOneBatchSuccess,GetOneBatchFailed
    ,EditBatchSuccess, EditBatchFailed,EditNoBatchSuccess,EditNoBatchFailed } from '../actions/Batch'

function* handleGetBatch(){
    try {
        const result = yield call(apiBatch.list)
        yield put(GetBatchSuccess(result))
    } catch (error) {
        yield put(GetBatchFailed(error))
    }
}

function* handleDelBatch(action){
    const{payload} = action
    try {
        const result = yield call(apiBatch.deleted,payload)
        yield put(DelBatchSuccess(payload))
    } catch (error) {
        yield put(DelBatchFailed(error))
    }
}

function* handleAddBatch(action){
    const {payload} = action
    try {
        const result = yield call(apiBatch.create,payload)
        yield put(AddBatchSuccess(result.data))
    } catch (error) {
        yield put(AddBatchFailed(error))
    }
}

function* handleGetOneBatch(action){
    const {payload} = action
    try {
        const result = yield call(apiBatch.findOne,payload)
        yield put(GetOneBatchSuccess(result))
    } catch (error) {
        yield put(GetOneBatchFailed(error))
    }
}

function* handleEditBatch(action){
    const {payload} = action
    try {
        const result = yield call(apiBatch.update, payload)
        yield put (EditBatchSuccess(result.data[1]))
    } catch (error) {
        yield put (EditBatchFailed(error))
    }
}

function* handleEditNoBatch(action){
    const {payload} = action
    try {
        const result = yield call(apiBatch.updateNoFile, payload)
        yield put (EditNoBatchSuccess(result.data[1]))
    } catch (error) {
        yield put (EditNoBatchFailed(error))
    }
}
export {
    handleGetBatch,
    handleDelBatch,
    handleAddBatch,
    handleGetOneBatch,
    handleEditBatch,
    handleEditNoBatch
}