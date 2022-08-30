import {
    all, call, fork, put, takeEvery, takeLatest,
  } from 'redux-saga/effects';
import apiBateva from '../../api/api-bateva';


import {  
    GetBatEvaSuccess,
    GetBatEvaFailed,
    AddBatEvaSuccess,
    AddBatEvaFailed
    
} from '../actions/BatEvaAction';

function* handleGetBatEva() {
    try {
        const result = yield call(apiBateva.findOne);
        yield put(GetBatEvaSuccess(result));
    } catch (error) {
        yield put(GetBatEvaFailed(error));
    }
}

function* handleAddBatEva(action){
    const { payload } = action;
    try {
        const result = yield call(apiBateva.create, payload);
        yield put(AddBatEvaSuccess(result));
      } catch (error) {
        yield put(AddBatEvaFailed(error));
      }
}



export { handleGetBatEva, handleAddBatEva};