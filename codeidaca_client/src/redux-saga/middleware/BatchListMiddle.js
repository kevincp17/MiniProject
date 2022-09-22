import batchOkApi from '../../api/api-batchOk';
import { call, put } from 'redux-saga/effects';
import { GetBatchSucceedList, GetBatchFailedList, GetOneBatchSucceedList, GetOneBatchFailedList, EditBatchListSucceed, EditBatchListFailed , GetBatchNameSuccess , GetBatchNameFailed} from '../actions/BatchListAction'


function* handleGetBatchList() {
  try {
    const result = yield call(batchOkApi.list)
    yield put(GetBatchSucceedList(result))
  } catch (error) {
    yield put(GetBatchFailedList(error))
  }
}

function* handleGetOneBatchList(action) {
  const { payload } = action
  try {
    const result = yield call(batchOkApi.findOne, payload)
    yield put(GetOneBatchSucceedList(result))
  } catch (error) {
    yield put(GetOneBatchFailedList(error))
  }
}

function* handleEditBatch(action) {
  const { payload } = action
  try {
    const result = yield call(batchOkApi.update, payload)
    yield put(EditBatchListSucceed(result.data[1]))
  } catch (error) {
    yield put(EditBatchListFailed(error))
  }
}


function* handleGetBatchName(){
  try {
    const result = yield call(batchOkApi.name)
    yield put(GetBatchNameSuccess(result))
  } catch (error) {
    yield put(GetBatchNameFailed(error))
  }
}

export {
  handleGetBatchList,
  handleGetOneBatchList,
  handleEditBatch,
  handleGetBatchName
}


