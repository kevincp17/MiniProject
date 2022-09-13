import { call, put } from "redux-saga/effects";

import apiBootcampApply from "../../api/api-bootcamp-apply";

import {
  GetBootcampSuceess,
  GetBootcampFailed,
  ApplyBootcampFailed,
  ApplyBootcampSuccess,
  ResetApplyBootcampSuccess,
  ResetApplyBootcampFailed,
} from "../actions/BootcampApply";

function* handleGetBootcamp(action) {
  const { payload } = action;
  try {
    const result = yield call(apiBootcampApply.getBootcamp, payload);
    yield put(GetBootcampSuceess(result));
  } catch (error) {
    yield put(GetBootcampFailed(error));
  }
}

function* handleApplyBootcamp(action) {
  const { payload } = action;
  try {
    const result = yield call(apiBootcampApply.applyBootcamp, payload);
    yield put(ApplyBootcampSuccess(result));
  } catch (error) {
    yield put(ApplyBootcampFailed(error));
  }
}

function* handleResetApplyBootcamp() {
  try {
    const data = {
      code: "0",
      message: "",
      data: {},
    };
    yield put(ResetApplyBootcampSuccess(data));
  } catch (error) {
    yield put(ResetApplyBootcampFailed(error));
  }
}

export { handleGetBootcamp, handleApplyBootcamp, handleResetApplyBootcamp };
