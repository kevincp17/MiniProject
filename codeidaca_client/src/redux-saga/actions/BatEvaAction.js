import * as ActionType from "../constants/BatEvaConstant";

export const GetBatEvaRequest = () => ({
  type: ActionType.GET_BATEVA_REQUEST,
});

export const GetBatEvaSuccess = (payload) => ({
  type: ActionType.GET_BATEVA_SUCCESS,
  payload,
});

export const GetBatEvaFailed = (payload) => ({
  type: ActionType.GET_BATEVA_FAILED,
  payload,
});

export const AddBatEvaRequest = (payload) => ({
  type: ActionType.ADD_BATEVA_REQUEST,
  payload,
})

export const AddBatEvaSuccess = (payload) => ({
  type: ActionType.ADD_BATEVA_SUCCESS,
  payload,
})

export const AddBatEvaFailed = (payload) =>({
  type : ActionType.ADD_BATEVA_FAILED,
  payload,
})
