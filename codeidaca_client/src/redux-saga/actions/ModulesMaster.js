import * as ActionType from "../constants/ModulesMasterConstant";

export const GetModulesMasterModulesRequest = () => ({
  type: ActionType.GET_MODULESMASTER_MODULES_REQUEST,
});

export const GetModulesMasterModulesSuccess = (payload) => ({
  type: ActionType.GET_MODULESMASTER_MODULES_SUCCESS,
  payload,
});

export const GetModulesMasterModulesFailed = (payload) => ({
  type: ActionType.GET_MODULESMASTER_MODULES_FAILED,
  payload,
});

export const GetModulesMasterRouteActionsRequest = () => ({
  type: ActionType.GET_MODULESMASTER_ROUTEACTIONS_REQUEST,
});

export const GetModulesMasterRouteActionsSuccess = (payload) => ({
  type: ActionType.GET_MODULESMASTER_ROUTEACTIONS_SUCCESS,
  payload,
});

export const GetModulesMasterRouteActionsFailed = (payload) => ({
  type: ActionType.GET_MODULESMASTER_ROUTEACTIONS_FAILED,
  payload,
});
