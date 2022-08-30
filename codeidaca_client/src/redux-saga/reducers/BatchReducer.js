import * as ActionType from '../constants/Batch'

const INIT_STATE = {
    batches : [],
    batch:{},
    instructors:[],
    talents: [],
    candidates: [],
    programs:[],
    isLoading : false,
    isRefresh : false
}

const BatchReducer = (state = INIT_STATE,action)=>{
    switch(action.type){
        case ActionType.GET_BATCH_REQUEST:
            return{
                ...state,
                isLoading: true
            }
        case ActionType.GET_BATCH_SUCCEED:
            return getBatchSucceed(state,action)
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
        default:
            return state
    }
}

const getBatchSucceed = (state, action) => {
    return {
        ...state,
        batches: action.payload,
        isLoading: false,
        isRefresh: false
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
    const filterBatch = state.batches.filter(el => el.batch_id !== payload[0].batch_id)
    return {
        ...state,
        batches:[...filterBatch,payload[0]],
        isLoading: false,
        isRefresh: false
    }
}

export default BatchReducer;