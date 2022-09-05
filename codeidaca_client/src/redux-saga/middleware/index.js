import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeUser from "../constants/User";
import { handleSignup, handleSignin, handleSignout } from "./UserSaga";

import * as ActionTypeModules from "../constants/ModulesConstant";
import {
  handleAddModules,
  handleDelModules,
  handleGetModules,
  handleEditModules,
  handleGetOneModules,
} from "./ModulesMiddle";

import * as ActionTypeRouteActions from "../constants/RouteActionsConstant";
import {
  handleAddRouteActions,
  handleGetRouteActions,
  handleGetOneRouteActions,
  handleDelRouteActions,
  handleEditRouteActions,
} from "./RouteActionsMiddle";

import * as ActionTypeModulesMaster from "../constants/ModulesMasterConstant";
import {
  handleGetModulesMasterModules,
  handleGetModulesMasterRouteActions,
} from "./ModulesMasterMiddle";

function* watchAll() {
  yield all([
    takeEvery(ActionTypeUser.ADD_SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionTypeUser.GET_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeUser.GET_SIGNOUT_REQUEST, handleSignout),

    //module
    takeEvery(ActionTypeModules.GET_MODULES_REQUEST, handleGetModules),

    takeEvery(ActionTypeModules.GETONE_MODULES_REQUEST, handleGetOneModules),
    takeEvery(ActionTypeModules.DEL_MODULES_REQUEST, handleDelModules),
    takeEvery(ActionTypeModules.ADD_MODULES_REQUEST, handleAddModules),
    takeEvery(ActionTypeModules.EDIT_MODULES_REQUEST, handleEditModules),

    //route Actions
    takeEvery(
      ActionTypeRouteActions.GET_ROUTEACTIONS_REQUEST,
      handleGetRouteActions
    ),
    takeEvery(
      ActionTypeRouteActions.GETONE_ROUTEACTIONS_REQUEST,
      handleGetOneRouteActions
    ),
    takeEvery(
      ActionTypeRouteActions.DEL_ROUTEACTIONS_REQUEST,
      handleDelRouteActions
    ),
    takeEvery(
      ActionTypeRouteActions.ADD_ROUTEACTIONS_REQUEST,
      handleAddRouteActions
    ),
    takeEvery(
      ActionTypeRouteActions.EDIT_ROUTEACTIONS_REQUEST,
      handleEditRouteActions
    ),
    //mastermodules

    takeEvery(
      ActionTypeModulesMaster.GET_MODULESMASTER_MODULES_REQUEST,
      handleGetModulesMasterModules
    ),

    takeEvery(
      ActionTypeModulesMaster.GET_MODULESMASTER_ROUTEACTIONS_REQUEST,
      handleGetModulesMasterRouteActions
    ),
  ]);
}

export default watchAll;
