import {call,put} from 'redux-saga/effects'
import batchAPI from '../../api/api-batch'
import { GetBatchSuccess, GetBatchFailed, AddBatchSuccess, AddBatchFailed } from '../actions/Batch'

function* handleGetBatch(){
  try {
    const result = yield call(batchAPI.findBatchName)
    yield put(GetBatchSuccess(result))
  } catch (error) {
    yield put(GetBatchFailed(error))
  }
}

function* handleAddBatch(action){
  const {payload} = action
  try {
    const result = yield call(batchAPI.create,payload)
    yield put(AddBatchSuccess(result.data))
  } catch (error) {
    yield put(AddBatchFailed(error))
  }
}

export { handleGetBatch, handleAddBatch }