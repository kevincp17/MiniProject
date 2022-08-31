import * as ActionType from '../constants/CandidateDisqualifiedConstant'

const INIT_STATE = {
    candidatesdisqualified: []
}

const CandidateDisqualifiedReduce = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_CANDIDATEDISQUALIFIED_REQUEST:
            return { ...state }
        case ActionType.GET_CANDIDATEDISQUALIFIED_SUCCESS:
            return GetCandidateDisqualifiedSucceed(state, action)
        default:
            return state
    }
}

const GetCandidateDisqualifiedSucceed = (state, action) => {
    return {
        ...state,
        candidatesdisqualified: action.payload
    }
}

export default
    CandidateDisqualifiedReduce
