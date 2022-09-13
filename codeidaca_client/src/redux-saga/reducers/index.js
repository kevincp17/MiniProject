import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import ProgramEntityReduce from './ProgramEntityReducer';
import AddressTypeReduce from './AddressTypeReducer';
import CountryReduce from './CountryReducer';
import ProvinceReduce from './ProvinceReducer';
import CityReduce from './CityReducer';
import MasterLocationReduce from './MasterLocationReducer';
import bootcampProgramReducer from './BootcampProgramReducer';
import StudentReviewReducer from './StudentReviewReducer';
import BatchReduce from './BatchReducer';

// Dashboard Apply - Bootcamp
import bootcampApplyReducer from "./BootcampApplyReducer"

const rootReducer = combineReducers({
  userState: userReducer,
  programEntityState: ProgramEntityReduce,
  addressTypeState: AddressTypeReduce,
  countryState: CountryReduce,
  provinceState: ProvinceReduce,
  cityState: CityReduce,
  masterLocationState: MasterLocationReduce,
  bootcampApply: bootcampApplyReducer,
  bootcampProgramState: bootcampProgramReducer,
  studentReviewState: StudentReviewReducer,
  batchState : BatchReduce,
});

export default rootReducer;
