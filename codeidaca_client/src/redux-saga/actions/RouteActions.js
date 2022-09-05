import * as ActionType from "../constants/RouteActionsConstant";

export const GetRouteActionsRequest = () => ({
  type: ActionType.GET_ROUTEACTIONS_REQUEST,
});

export const GetRouteActionsSuccess = (payload) => ({
  type: ActionType.GET_ROUTEACTIONS_SUCCESS,
  payload,
});

export const GetRouteActionsFailed = (payload) => ({
  type: ActionType.GET_ROUTEACTIONS_FAILED,
  payload,
});

export const GetOneRouteActionsRequest = (payload) => ({
  type: ActionType.GETONE_ROUTEACTIONS_REQUEST,
  payload,
});

export const GetOneRouteActionsSuccess = (payload) => ({
  type: ActionType.GETONE_ROUTEACTIONS_SUCCESS,
  payload,
});

export const GetOneRouteActionsFailed = (payload) => ({
  type: ActionType.GETONE_ROUTEACTIONS_FAILED,
  payload,
});

export const DelRouteActionsRequest = (payload) => ({
  type: ActionType.DEL_ROUTEACTIONS_REQUEST,
  payload,
});

export const DelRouteActionsSuccess = (payload) => ({
  type: ActionType.DEL_ROUTEACTIONS_SUCCESS,
  payload,
});

export const DelRouteActionsFailed = (payload) => ({
  type: ActionType.DEL_ROUTEACTIONS_FAILED,
  payload,
});

export const AddRouteActionsRequest = (payload) => ({
  type: ActionType.ADD_ROUTEACTIONS_REQUEST,
  payload,
});

export const AddRouteActionsSuccess = (payload) => ({
  type: ActionType.ADD_ROUTEACTIONS_SUCCESS,
  payload,
});

export const AddRouteActionsFailed = (payload) => ({
  type: ActionType.ADD_ROUTEACTIONS_FAILED,
  payload,
});

export const EditRouteActionsRequest = (payload) => ({
  type: ActionType.EDIT_ROUTEACTIONS_REQUEST,
  payload,
});

export const EditRouteActionsSuccess = (payload) => ({
  type: ActionType.EDIT_ROUTEACTIONS_SUCCESS,
  payload,
});

export const EditRouteActionsFailed = (payload) => ({
  type: ActionType.EDIT_ROUTEACTIONS_FAILED,
  payload,
});
