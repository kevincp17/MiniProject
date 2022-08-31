import * as ActionType from '../constants/CandidateContractedConstant'

const INIT_STATE = {
    candidatescontracted: [],
    editcandidatescontracted: []
}

const CandidateContractedReduce = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_CANDIDATECONTRACTED_REQUEST:
            return { ...state }
        case ActionType.GET_CANDIDATECONTRACTED_SUCCESS:
            return GetCandidateContractedSucceed(state, action)
        case ActionType.EDIT_CANDIDATECONTRACTED_REQUEST:
            return { ...state }
        case ActionType.EDIT_CANDIDATECONTRACTED_SUCCESS:
            return EditCandidateContractedSucceed(state, action)
        default:
            return state
    }
}

const GetCandidateContractedSucceed = (state, action) => {
    return {
        ...state,
        candidatescontracted: action.payload
    }
}

const EditCandidateContractedSucceed = (state, action) => {
    return {
        ...state,
        editcandidatescontracted: action.payload
    }
}

export default
    CandidateContractedReduce
