import {call,put} from 'redux-saga/effects'
import batchAPI from '../../api/api-batch'
import { GetBatchSuccess, GetBatchFailed, AddBatchSuccess, AddBatchFailed,
  doGetBatchIdSucceed,
  doGetBatchIdFailed,
  doUpdateBatchSucceed,
  doUpdateBatchFailed,
  doEditBatchSuccess,
  doEditBatchFailed,
  doDelBatchSuccess,
  doDelBatchFailed, } from '../actions/Batch'

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

function* handleEditBatch(action){
  const {payload} = action
  try {
      const result = yield call(apiBatch.updateStatusBatch, payload)
      yield put (doEditBatchSuccess(result.data[1]))
  } catch (error) {
      yield put (doEditBatchFailed(error))
  }
}

function* handleDelBatch(action){
  const{payload} = action
  try {
      const result = yield call(apiBatch.deleted,payload)
      yield put(doDelBatchSuccess(payload))
  } catch (error) {
      yield put(doDelBatchFailed(error))
  }
}

export { handleGetBatch, handleAddBatch,handleGetBatchId,
  handleUpdateBatch,
  handleEditBatch,
  handleDelBatch }