import * as ActionType from "../constants/BatEvaConstant";

const INIT_STATE = {
  BatEva: [],
  status : {}
};

const BatEvaReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_BATEVA_REQUEST:
        return {
            ...state,
            status:"",
            isLoading: true

    };
      
    case ActionType.GET_BATEVA_SUCCESS: {
        return GetBatEvaSucceed(state,action)
    }

    case ActionType.ADD_BATEVA_REQUEST: {
        return {
          ...state,
          status:"",
          // isLoading: true,
          // isRefresh: true
          
        };
    }
      
    case ActionType.ADD_BATEVA_SUCCESS: {
       return AddBatEvaSucceed(state, action);
    }

    
    default:
        return state;
}
};

const GetBatEvaSucceed = (state, action) => {
  return {
    ...state,
    BatEva: action.payload,
  };
};

const AddBatEvaSucceed = (state,action) =>{
  const hasil = action.payload
  return {
    ...state,
    BatEva:hasil,
    status: hasil
  };
}

export default BatEvaReducer;
