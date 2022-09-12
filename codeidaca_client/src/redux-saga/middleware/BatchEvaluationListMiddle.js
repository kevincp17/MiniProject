import apiTest from '../../api/api-test';
import { call, put } from 'redux-saga/effects';
import { GetBatchSucceedList, GetBatchFailedList, GetOneBatchSucceedList, GetOneBatchFailedList, EditBatchListSucceed, EditBatchListFailed } from '../actions/BatchEvalutionListAction'


function* handleGetBatchList() {
  try {
    const result = yield call(apiTest.list)
    yield put(GetBatchSucceedList(result))
  } catch (error) {
    yield put(GetBatchFailedList(error))
  }
}

function* handleGetOneBatchList(action) {
  const { payload } = action
  try {
    const result = yield call(apiTest.findOne, payload)
    yield put(GetOneBatchSucceedList(result))
  } catch (error) {
    yield put(GetOneBatchFailedList(error))
  }
}

function* handleEditBatch(action) {
  const { payload } = action
  try {
    const result = yield call(apiTest.update, payload)
    yield put(EditBatchListSucceed(result.data[1]))
  } catch (error) {
    yield put(EditBatchListFailed(error))
  }
}

export {
  handleGetBatchList,
  handleGetOneBatchList,
  handleEditBatch
}


