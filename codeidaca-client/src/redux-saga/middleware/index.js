import { takeEvery, all } from 'redux-saga/effects';
import * as ActionTypeUser from '../constants/User';
import * as ActionTypeBatch from '../constants/Batch';

import {handleSignup,handleSignin,handleSignout, handleGetUser} from './UserSaga'
import {handleGetBatch, handleDelBatch, handleEditBatch} from './BatchSaga'

function *watchAll() {
  yield all([
    takeEvery(ActionTypeUser.ADD_SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionTypeUser.GET_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeUser.GET_SIGNOUT_REQUEST, handleSignout),
    takeEvery(ActionTypeUser.GET_USER_REQUEST, handleGetUser),
    takeEvery(ActionTypeBatch.GET_BATCH_REQUEST, handleGetBatch),
    takeEvery(ActionTypeBatch.DEL_BATCH_REQUEST, handleDelBatch),
    takeEvery(ActionTypeBatch.EDIT_BATCH_REQUEST, handleEditBatch),
  ])
}

export default watchAll;


