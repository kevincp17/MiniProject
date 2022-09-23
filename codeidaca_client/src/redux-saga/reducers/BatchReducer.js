import * as ActionType from '../constants/Batch'

const INIT_STATE = {
  batchs: [],
  batch:{},
  instructors:[],
  talents: [],
  candidates: [],
  programs:[],
  isLoading : false,
  isRefresh : false
}

const BatchReduce = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_BATCH_REQUEST:
      return { ...state }
    case ActionType.GET_BATCH_SUCCESS:
      return GetBatchSucceed(state, action)
    case ActionType.ADD_BATCH_REQUEST:
      return { ...state }
    case ActionType.ADD_BATCH_SUCCESS:
      return AddBatchSucceed(state, action)
    case ActionType.GET_BATCH_ID_REQUEST:
      return{
          ...state,
          isLoading : true,
          isRefresh : true}
    case ActionType.GET_BATCH_ID_SUCCEED:
        return getBatchIdSucceed(state,action)
    case ActionType.UPDATE_BATCH_REQUEST:
        return{
            ...state,
            isLoading : true,
            isRefresh:true}
    case ActionType.UPDATE_BATCH_SUCCEED:
        return updateBatchSucceed(state,action)
    case ActionType.DEL_BATCH_REQUEST:
        return { ...state }
    case ActionType.DEL_BATCH_SUCCESS:
        return delBatchSucceed(state, action)
    case ActionType.EDIT_BATCH_REQUEST:
        return { ...state }
    case ActionType.EDIT_BATCH_SUCCESS:
        return editBatchSucceed(state, action)
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

const getBatchIdSucceed = (state,action) => {
  return{
      ...state,
      batch:action.payload.batch,
      candidates:[...action.payload.talents,...action.payload.candidates],
      instructors:action.payload.instructors,
      programs:action.payload.programs,
      isLoading: false,
      isRefresh: false
  }
}

const updateBatchSucceed = (state, action)=>{
  const { payload } = action
  const filterBatch = state.batchs.filter(el => el.batch_id !== payload[0].batch_id)
  return {
      ...state,
      batchs:[...filterBatch,payload[0]],
      isLoading: false,
      isRefresh: false
  }
}
const editBatchSucceed = (state, action) => {
  const { payload } = action
  const filterBatch = state.batchs.filter(el => el.batch_id !== payload[0].batch_id)
  return {
      ...state,
      batchs: [...filterBatch, payload[0]]
  }
}
const delBatchSucceed = (state, action) => {
  const { payload } = action
  const filterBatch = state.batchs.filter(el => el.batch_id !== payload)
  return {
      ...state,
      batchs: [...filterBatch]
  }
}

export default BatchReduce