import * as ActionType from '../constants/CandidateFilteringConstant'

const INIT_STATE = {
    candidatesfiltering: []
}

const CandidateFilteringReduce = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_CANDIDATEFILTERING_REQUEST:
            return { ...state }
        case ActionType.GET_CANDIDATEFILTERING_SUCCESS:
            return GetCandidateFilteringSucceed(state, action)
        default:
            return state
    }
}

const GetCandidateFilteringSucceed = (state, action) => {
    return {
        ...state,
        candidatesfiltering: action.payload
    }
}

export default
    CandidateFilteringReduce
