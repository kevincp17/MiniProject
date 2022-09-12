import {call,put} from 'redux-saga/effects'
import batchAPI from '../../api/api-test'
import { GetBatchSuccess, GetBatchFailed } from '../actions/BatchEvalution1'

function* handleGetBatch(){
  try {
    const result = yield call(batchAPI.test)
    yield put(GetBatchSuccess(result))
  } catch (error) {
    yield put(GetBatchFailed(error))
  }
}

export { handleGetBatch }
