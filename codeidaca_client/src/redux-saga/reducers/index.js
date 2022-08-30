import { combineReducers } from 'redux';
import BatchReducer from './BatchReducer';
import userReducer from './UserReducer';

const rootReducer = combineReducers({
  userState : userReducer,
  batchState : BatchReducer
});

export default rootReducer;