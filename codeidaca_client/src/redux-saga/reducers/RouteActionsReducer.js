import * as ActionType from "../constants/RouteActionsConstant";

const INIT_STATE = {
  RouteActions: [],
  RouteAction: [], //inisiasi array kosong
};

const RouteActionsReduce = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_ROUTEACTIONS_REQUEST:
      return { ...state };
    case ActionType.GET_ROUTEACTIONS_SUCCESS:
      return GetRouteActionsucceed(state, action);
    case ActionType.GETONE_ROUTEACTIONS_REQUEST:
      return { ...state };
    case ActionType.GETONE_ROUTEACTIONS_SUCCESS:
      return GetOneRouteActionsucceed(state, action);
    case ActionType.DEL_ROUTEACTIONS_REQUEST:
      return { ...state };
    case ActionType.DEL_ROUTEACTIONS_SUCCESS:
      return DelRouteActionsucceed(state, action);
    case ActionType.ADD_ROUTEACTIONS_REQUEST:
      return { ...state };
    case ActionType.ADD_ROUTEACTIONS_SUCCESS:
      return AddRouteActionsucceed(state, action);
    case ActionType.EDIT_ROUTEACTIONS_REQUEST:
      return { ...state };
    case ActionType.EDIT_ROUTEACTIONS_SUCCESS:
      return EditRouteActionsSucceed(state, action);
    default:
      return state;
  }
};

const GetRouteActionsucceed = (state, action) => {
  return {
    ...state,
    RouteActions: action.payload,
  };
};

const GetOneRouteActionsucceed = (state, action) => {
  return {
    ...state,
    RouteAction: action.payload,
  };
};

const DelRouteActionsucceed = (state, action) => {
  const { payload } = action;
  const filterRegion = state.RouteActions.filter(
    (el) => el.region_id !== payload
  );
  return {
    ...state,
    RouteActions: [...filterRegion],
  };
};

const AddRouteActionsucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    RouteActions: [...state.RouteActions, payload],
  };
};

const EditRouteActionsSucceed = (state, action) => {
  const { payload } = action;
  const filterRouteActions = state.RouteActions.filter(
    (el) => el.RouteActions_id !== payload[0].RouteActions_id
  );
  return {
    ...state,
    RouteActions: [...filterRouteActions, payload[0]],
  };
};

export default RouteActionsReduce;
