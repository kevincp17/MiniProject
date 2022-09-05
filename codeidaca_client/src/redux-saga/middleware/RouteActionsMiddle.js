import { call, put } from "redux-saga/effects";
import apiRouteActions from "../../api/api-routeActions";
import {
  GetRouteActionsSuccess,
  GetRouteActionsFailed,
  GetOneRouteActionsSuccess,
  GetOneRouteActionsFailed,
  DelRouteActionsSuccess,
  DelRouteActionsFailed,
  AddRouteActionsSuccess,
  AddRouteActionsFailed,
  EditRouteActionsSuccess,
  EditRouteActionsFailed,
} from "../actions/RouteActions";

function* handleGetRouteActions() {
  try {
    const result = yield call(apiRouteActions.list);
    yield put(GetRouteActionsSuccess(result));
  } catch (error) {
    yield put(GetRouteActionsFailed(error));
  }
}

function* handleGetOneRouteActions(action) {
  const { payload } = action;
  // console.log("action payload");
  // console.log(action);
  // console.log(payload);

  try {
    const result = yield call(apiRouteActions.findOne, payload);
    yield put(GetOneRouteActionsSuccess(result));
  } catch (error) {
    yield put(GetOneRouteActionsFailed(error));
  }
}

function* handleDelRouteActions(action) {
  const { payload } = action;
  try {
    const result = yield call(apiRouteActions.deleted, payload);
    yield put(DelRouteActionsSuccess(result));
  } catch (error) {
    yield put(DelRouteActionsFailed(error));
  }
}

function* handleAddRouteActions(action) {
  const { payload } = action;
  try {
    const result = yield call(apiRouteActions.create, payload);
    yield put(AddRouteActionsSuccess(result.data));
  } catch (error) {
    yield put(AddRouteActionsFailed(error));
  }
}
function* handleEditRouteActions(action) {
  const { payload } = action;
  try {
    const result = yield call(apiRouteActions.update, payload);
    yield put(EditRouteActionsSuccess(result.data[1]));
  } catch (error) {
    yield put(EditRouteActionsFailed(error));
  }
}

export {
  handleGetRouteActions,
  handleGetOneRouteActions,
  handleDelRouteActions,
  handleAddRouteActions,
  handleEditRouteActions,
};
