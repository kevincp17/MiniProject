import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import BatchReducer from './BatchReducer'
const rootReducer = combineReducers({
  batchState : BatchReducer,
  userState : UserReducer
});

export default rootReducer;