import * as ActionType from '../constants/CandidateNotrespondingConstant'

const INIT_STATE = {
    candidatesnotresponding: []
}

const CandidateNotrespondingReduce = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_CANDIDATENOTRESPONDING_REQUEST:
            return { ...state }
        case ActionType.GET_CANDIDATENOTRESPONDING_SUCCESS:
            return GetCandidateNotrespondingSucceed(state, action)
        default:
            return state
    }
}

const GetCandidateNotrespondingSucceed = (state, action) => {
    return {
        ...state,
        candidatesnotresponding: action.payload
    }
}

export default
    CandidateNotrespondingReduce
