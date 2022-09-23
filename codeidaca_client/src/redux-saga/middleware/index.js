import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeUser from "../constants/User";
import * as ActionTypeProgramEntity from "../constants/ProgramEntity";
// import * as ActionTypeAddressType from '../constants/AddressType'
// import * as ActionCountryType from '../constants/Country'
// import * as ActionProvince from '../constants/Province'
import * as ActionMasterLocation from '../constants/MasterLocation'
import * as ActionTypeBootcampProgram from '../constants/BootcampProgram'
import * as ActionTypeStudentReview from '../constants/StudentReview'
import * as ActionTypeBatch from '../constants/Batch'
import * as ActionTypeBatchList from '../constants/BatchListConstants';

import {handleGetBatchList, handleGetOneBatchList, handleEditBatch, handleGetBatchName} from './BatchListMiddle'
import { handleSignup, handleSignin, handleSignout, handleSignupEmp } from './UserSaga'
import { handleGetFourProgram, handleGetThreeCourse, handleGetAlumniTestimony } from './ProgramEntitySaga'
import { handleGetBootcampProgram, handleSearchProgram } from './BootcampProgramSaga';
import { handleGetStudentReview } from './StudentReviewSaga';

// import {handleAddAddressType,handleDelAddressType,handleEditAddressType,handleGetAddressType,handleGetOneAddressType} from './AddressTypeSaga'
// import {handleAddCountry,handleDelCountry,handleEditCountry,handleGetCountry,handleGetOneCountry} from './CountrySaga'
// import {handleAddProvince,handleDelProvince,handleEditProvince,handleGetProvince,handleGetOneProvince} from './ProvinceSaga'
// import {handleAddCity,handleDelCity,handleEditCity,handleGetCity,handleGetOneCity} from './CitySaga'
import {
  handleAddAddressType, handleDelAddressType, handleEditAddressType, handleGetAddressType, handleGetOneAddressType,
  handleAddCountry, handleDelCountry, handleEditCountry, handleGetCountry, handleGetOneCountry,
  handleAddProvince, handleDelProvince, handleEditProvince, handleGetProvince, handleGetOneProvince,
  handleAddCity, handleDelCity, handleEditCity, handleGetCity, handleGetOneCity
} from './MasterLocationSaga'
import { handleGetBatch, handleAddBatch,handleDelBatch, handleEditBatch, handleGetBatchId,handleUpdateBatch } from './BatchSaga';

// Dashboard Apply - Bootcamp
import * as ActionTypeBootcampApply from "../constants/BootcampApply";
import {
  handleGetBootcamp,
  handleApplyBootcamp,
  handleResetApplyBootcamp,
} from "./BootcampApplySaga";

function* watchAll() {
  yield all([
    takeEvery(ActionTypeUser.ADD_SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionTypeUser.ADD_SIGNUPEMP_REQUEST, handleSignupEmp),
    takeEvery(ActionTypeUser.GET_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeUser.GET_SIGNOUT_REQUEST, handleSignout),

    takeEvery(ActionTypeProgramEntity.GETFOUR_PROGRAM_REQUEST, handleGetFourProgram),
    takeEvery(ActionTypeProgramEntity.GETTHREE_COURSE_REQUEST, handleGetThreeCourse),
    takeEvery(ActionTypeProgramEntity.GETALUMNI_TESTIMONY_REQUEST, handleGetAlumniTestimony),

    takeEvery(ActionTypeBootcampProgram.GET_BOOTCAMPPROGRAM_REQUEST, handleGetBootcampProgram),
    takeEvery(ActionTypeBootcampProgram.GET_SEARCHPROGRAM_REQUEST, handleSearchProgram),
    takeEvery(ActionTypeStudentReview.GET_STUDENTREVIEW_REQUEST, handleGetStudentReview),

    takeEvery(ActionMasterLocation.GET_ADDRESSTYPE_REQUEST, handleGetAddressType),
    takeEvery(ActionMasterLocation.DEL_ADDRESSTYPE_REQUEST, handleDelAddressType),
    takeEvery(ActionMasterLocation.ADD_ADDRESSTYPE_REQUEST, handleAddAddressType),
    takeEvery(ActionMasterLocation.GETONE_ADDRESSTYPE_REQUEST, handleGetOneAddressType),
    takeEvery(ActionMasterLocation.EDIT_ADDRESSTYPE_REQUEST, handleEditAddressType),

    takeEvery(ActionMasterLocation.GET_COUNTRY_REQUEST, handleGetCountry),
    takeEvery(ActionMasterLocation.DEL_COUNTRY_REQUEST, handleDelCountry),
    takeEvery(ActionMasterLocation.ADD_COUNTRY_REQUEST, handleAddCountry),
    takeEvery(ActionMasterLocation.GETONE_COUNTRY_REQUEST, handleGetOneCountry),
    takeEvery(ActionMasterLocation.EDIT_COUNTRY_REQUEST, handleEditCountry),

    takeEvery(ActionMasterLocation.GET_PROVINCE_REQUEST, handleGetProvince),
    takeEvery(ActionMasterLocation.DEL_PROVINCE_REQUEST, handleDelProvince),
    takeEvery(ActionMasterLocation.ADD_PROVINCE_REQUEST, handleAddProvince),
    takeEvery(ActionMasterLocation.GETONE_PROVINCE_REQUEST, handleGetOneProvince),
    takeEvery(ActionMasterLocation.EDIT_PROVINCE_REQUEST, handleEditProvince),

    takeEvery(ActionMasterLocation.GET_CITY_REQUEST, handleGetCity),
    takeEvery(ActionMasterLocation.DEL_CITY_REQUEST, handleDelCity),
    takeEvery(ActionMasterLocation.ADD_CITY_REQUEST, handleAddCity),
    takeEvery(ActionMasterLocation.GETONE_CITY_REQUEST, handleGetOneCity),
    takeEvery(ActionMasterLocation.EDIT_CITY_REQUEST, handleEditCity),

    takeEvery(ActionTypeBootcampApply.GET_BOOTCAMP_REQUEST, handleGetBootcamp),
    takeEvery(
      ActionTypeBootcampApply.APPLY_BOOTCAMP_REQUEST,
      handleApplyBootcamp
    ),
    takeEvery(ActionTypeBootcampApply.RESET_APPLY_BOOTCAMP_REQUEST, handleResetApplyBootcamp),
    
    //batchEvaluation Gempita
    takeEvery(ActionTypeBatchList.GET_BATCHLIST_REQUEST, handleGetBatchList),
    takeEvery(ActionTypeBatchList.GET_BATCHNAME_REQUEST, handleGetBatchName),
    takeEvery(ActionTypeBatchList.GETONE_BATCHLIST_REQUEST, handleGetOneBatchList),
    takeEvery(ActionTypeBatchList.EDIT_BATCHLIST_REQUEST, handleEditBatch),

    takeEvery(ActionTypeBatch.GET_BATCH_REQUEST, handleGetBatch),
    takeEvery(ActionTypeBatch.ADD_BATCH_REQUEST, handleAddBatch),

    takeEvery(ActionTypeBatch.GET_BATCH_ID_REQUEST, handleGetBatchId),
    takeEvery(ActionTypeBatch.UPDATE_BATCH_REQUEST,handleUpdateBatch),
    takeEvery(ActionTypeBatch.EDIT_BATCH_REQUEST,handleEditBatch),
    takeEvery(ActionTypeBatch.DEL_BATCH_REQUEST,handleDelBatch)
  ]);
}

export default watchAll;
