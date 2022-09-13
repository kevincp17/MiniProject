import * as ActionType from '../constants/Batch'

const INIT_STATE = {
  batchs: []
}

const CreateBatchReduce = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_BATCH_REQUEST:
      return { ...state }
    case ActionType.GET_BATCH_SUCCESS:
      return GetBatchSucceed(state, action)
    case ActionType.ADD_BATCH_REQUEST:
      return { ...state }
    case ActionType.ADD_BATCH_SUCCESS:
      return AddBatchSucceed(state, action)
    default:
      return state
  }
}

const GetBatchSucceed = (state, action) => {
  return {
    ...state,
    batchs: action.payload
  }
}

const AddBatchSucceed = (state,action) =>{
  const {payload} = action
  return {
    ...state,
    batchs: [...state.batchs,payload]
  }
}

export default CreateBatchReduce