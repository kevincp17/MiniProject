import * as ActionType from '../constants/Test'

const INIT_STATE = {
  batchs: []
}

const BatchReduce = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_BATCH_REQUEST:
      return { ...state }
    case ActionType.GET_BATCH_SUCCESS:
      return GetBatchSucceed(state, action)
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


export default BatchReduce
