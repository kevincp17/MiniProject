import * as ActionType from "../constants/ModulesConstant";

const INIT_STATE = {
  Modules: [],
  Module: [],
};

const ModulesReduce = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_MODULES_REQUEST:
      return { ...state };
    case ActionType.GET_MODULES_SUCCESS:
      return GetModulesSucceed(state, action);
    case ActionType.GETONE_MODULES_REQUEST:
      return { ...state };
    case ActionType.GETONE_MODULES_SUCCESS:
      return GetOneModulesSucceed(state, action);
    case ActionType.DEL_MODULES_REQUEST:
      return { ...state };
    case ActionType.DEL_MODULES_SUCCESS:
      return DelModulesSucceed(state, action);
    case ActionType.ADD_MODULES_REQUEST:
      return { ...state };
    case ActionType.ADD_MODULES_SUCCESS:
      return AddModulesSucceed(state, action);
    case ActionType.EDIT_MODULES_REQUEST:
      return { ...state };
    case ActionType.EDIT_MODULES_SUCCESS:
      return EditModulesSucceed(state, action);
    default:
      return state;
  }
};

const GetModulesSucceed = (state, action) => {
  // console.log(action.payload);
  return {
    ...state,
    Modules: action.payload,
  };
};

const GetOneModulesSucceed = (state, action) => {
  //const { payload } = action;
  return {
    ...state,
    Module: action.payload,
  };
};

const DelModulesSucceed = (state, action) => {
  const { payload } = action;
  const filterRegion = state.Modules.filter((el) => el.region_id !== payload);
  return {
    ...state,
    Modules: [...filterRegion],
  };
};
const AddModulesSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    Modules: [...state.Modules, payload],
  };
};

const EditModulesSucceed = (state, action) => {
  const { payload } = action;
  const filterModules = state.Modules.filter(
    (el) => el.module_name !== payload[0].module_name
  );
  return {
    ...state,
    Modules: [...filterModules, payload[0]],
  };
};

export default ModulesReduce;
