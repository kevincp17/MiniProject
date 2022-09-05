import * as ActionType from "../constants/ModulesMasterConstant";

const INIT_STATE = {
  ModulesMaster: [],
};

const ModulesMasterReduce = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_MODULESMASTER_MODULES_REQUEST:
      return { ...state };
    case ActionType.GET_MODULESMASTER_MODULES_SUCCESS:
      return GetModulesMasterModulesSucceed(state, action);
    case ActionType.GET_MODULESMASTER_ROUTEACTIONS_REQUEST:
      return { ...state };
    case ActionType.GET_MODULESMASTER_ROUTEACTIONS_SUCCESS:
      return GetModulesMasterRouteActionsSucceed(state, action);

    default:
      return state;
  }
};

const GetModulesMasterModulesSucceed = (state, action) => {
  return {
    ...state,
    ModulesMaster: action.payload,
  };
};

const GetModulesMasterRouteActionsSucceed = (state, action) => {
  return {
    ...state,
    ModulesMaster: action.payload,
  };
};

export default ModulesMasterReduce;
