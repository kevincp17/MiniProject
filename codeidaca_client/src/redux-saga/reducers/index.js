import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import ProgramEntityReduce from './ProgramEntityReducer';
import AddressTypeReduce from './AddressTypeReducer';
import CountryReduce from './CountryReducer';
import ProvinceReduce from './ProvinceReducer';
import CityReduce from './CityReducer';
import MasterLocationReduce from './MasterLocationReducer';
import BatEvaReducer from './BatEvaReducer';

const rootReducer = combineReducers({
  userState : userReducer,
  programEntityState:ProgramEntityReduce,
  addressTypeState:AddressTypeReduce,
  countryState:CountryReduce,
  provinceState:ProvinceReduce,
  cityState:CityReduce,
  masterLocationState:MasterLocationReduce,
  BatEvaState : BatEvaReducer
});

export default rootReducer;