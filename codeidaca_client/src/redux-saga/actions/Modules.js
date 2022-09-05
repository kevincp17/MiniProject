import * as ActionType from "../constants/ModulesConstant";

export const GetModulesRequest = () => ({
  type: ActionType.GET_MODULES_REQUEST,
});

export const GetModulesSuccess = (payload) => ({
  type: ActionType.GET_MODULES_SUCCESS,
  payload,
});

export const GetModulesFailed = (payload) => ({
  type: ActionType.GET_MODULES_FAILED,
  payload,
});

export const GetOneModulesRequest = (payload) => ({
  type: ActionType.GETONE_MODULES_REQUEST,
  payload,
});

export const GetOneModulesSuccess = (payload) => ({
  type: ActionType.GETONE_MODULES_SUCCESS,
  payload,
});

export const GetOneModulesFailed = (payload) => ({
  type: ActionType.GETONE_MODULES_FAILED,
  payload,
});

export const DelModulesRequest = (payload) => ({
  type: ActionType.DEL_MODULES_REQUEST,
  payload,
});

export const DelModulesSuccess = (payload) => ({
  type: ActionType.DEL_MODULES_SUCCESS,
  payload,
});

export const DelModulesFailed = (payload) => ({
  type: ActionType.DEL_MODULES_FAILED,
  payload,
});

export const AddModulesRequest = (payload) => ({
  type: ActionType.ADD_MODULES_REQUEST,
  payload,
});

export const AddModulesSuccess = (payload) => ({
  type: ActionType.ADD_MODULES_SUCCESS,
  payload,
});

export const AddModulesFailed = (payload) => ({
  type: ActionType.ADD_MODULES_FAILED,
  payload,
});

export const EditModulesRequest = (payload) => ({
  type: ActionType.EDIT_MODULES_REQUEST,
  payload,
});

export const EditModulesSuccess = (payload) => ({
  type: ActionType.EDIT_MODULES_SUCCESS,
  payload,
});

export const EditModulesFailed = (payload) => ({
  type: ActionType.EDIT_MODULES_FAILED,
  payload,
});
