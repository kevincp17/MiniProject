import * as ActionType from '../constants/Candidate'
const INIT_STATE = {
    candidates: [],
    isLoading: false,
    isRefresh: false
}

const CandidateReducer = ( state =INIT_STATE, action)=>{
    switch(action.type){
        case ActionType.GET_CANDIDATE_REQUEST:
            return{
                ...state,
                isLoading : true
            }
        case ActionType.GET_CANDIDATE_SUCCEED:
            return getCandidatSucceed(state, action)
        default :
            return state
    }
}

const getCandidatSucceed = (state, action) => {
    return {
        ...state,
        candidates: action.payload,
        isLoading: false,
        isRefresh: false
    }
}

export default CandidateReducer
