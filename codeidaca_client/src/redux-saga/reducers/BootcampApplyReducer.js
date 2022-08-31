import * as ActionType from "../constants/BootcampApply";

const INIT_STATE = {
  bootcampDetail: {
    code: "0",
    message: "",
    data: {
      bootcampApply: null,
      course: null,
      userMedia: {
        cv: null,
        photo: null,
      },
      userEducation: [],
      user: null,
      progress: []
    },
  },
  applyBootcamp: {
    code: "0",
    message: "",
    data: {},
  },
};

const bootcampApplyReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_BOOTCAMP_REQUEST:
      return { ...state };
    case ActionType.GET_BOOTCAMP_SUCCEED:
      return GetBootcampSucceed(state, action);
    case ActionType.APPLY_BOOTCAMP_REQUEST:
      return { ...state };
    case ActionType.APPLY_BOOTCAMP_SUCCEED:
      return ApplyBootcampSucceed(state, action);
    case ActionType.RESET_APPLY_BOOTCAMP_REQUEST:
      return { ...state };
    case ActionType.RESET_APPLY_BOOTCAMP_SUCCEED:
      return ResetApplyBootcampSucced(state, action);
    default:
      return state;
  }
};

const GetBootcampSucceed = (state, action) => {
  return {
    ...state,
    bootcampDetail: action.payload,
  };
};

const ApplyBootcampSucceed = (state, action) => {
  return {
    ...state,
    applyBootcamp: action.payload,
  };
};

const ResetApplyBootcampSucced = (state, action) => {
  return {
    ...state,
    applyBootcamp: action.payload,
  };
};

export default bootcampApplyReducer;
