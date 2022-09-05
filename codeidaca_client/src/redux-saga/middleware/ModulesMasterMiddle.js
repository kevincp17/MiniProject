import { call, put } from "redux-saga/effects";
import apiModulesMaster from "../../api/api-modulesMaster";
import {
  GetModulesMasterModulesSuccess,
  GetModulesMasterModulesFailed,
  GetModulesMasterRouteActionsSuccess,
  GetModulesMasterRouteActionsFailed,
} from "../actions/ModulesMaster";

function* handleGetModulesMasterModules() {
  try {
    const result = yield call(apiModulesMaster.list);
    yield put(GetModulesMasterModulesSuccess(result));
  } catch (error) {
    yield put(GetModulesMasterModulesFailed(error));
  }
}

function* handleGetModulesMasterRouteActions() {
  try {
    const result = yield call(apiModulesMaster.list);
    yield put(GetModulesMasterRouteActionsSuccess(result));
  } catch (error) {
    yield put(GetModulesMasterRouteActionsFailed(error));
  }
}

export { handleGetModulesMasterModules, handleGetModulesMasterRouteActions };
