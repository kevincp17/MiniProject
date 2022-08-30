import { takeEvery, all } from 'redux-saga/effects';
import * as ActionTypeUser from '../constants/User';
import * as ActionTypeBatch from '../constants/Batch'

import {handleSignup,handleSignin,handleSignout} from './UserSaga'
import {handleGetBatch, handleGetBatchId,handleUpdateBatch} from './BatchSaga'

function *watchAll() {
  yield all([
    takeEvery(ActionTypeUser.ADD_SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionTypeUser.GET_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeUser.GET_SIGNOUT_REQUEST, handleSignout),

    takeEvery(ActionTypeBatch.GET_BATCH_ID_REQUEST, handleGetBatchId),
    takeEvery(ActionTypeBatch.UPDATE_BATCH_REQUEST,handleUpdateBatch),
    takeEvery(ActionTypeBatch.GET_BATCH_ID_REQUEST,handleGetBatch)
  ])
}

export default watchAll;


