import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import ModulesReduce from "./ModulesReducer";
import RouteActionsReduce from "./RouteActionsReducer";
import ModulesMasterReduce from "./ModulesMasterReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  ModulesState: ModulesReduce,
  RouteActionsState: RouteActionsReduce,
  ModulesMasterState: ModulesMasterReduce,
});

export default rootReducer;
