import * as ActionType from '../constants/CandidateConstant'

const INIT_STATE = {
    candidates: [],
    candidate: [],
}

const CandidateReduce = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_CANDIDATE_REQUEST:
            return { ...state }
        case ActionType.GET_CANDIDATE_SUCCESS:
            return GetCandidateSucceed(state, action)
        case ActionType.GETONE_CANDIDATE_REQUEST:
            return { ...state }
        case ActionType.GETONE_CANDIDATE_SUCCESS:
            return GetOneCandidateSucceed(state, action)
        case ActionType.EDIT_CANDIDATE_REQUEST:
            return { ...state }
        case ActionType.EDIT_CANDIDATE_SUCCESS:
            return EditCandidateSucceed(state, action)
        default:
            return state
    }
}

const GetCandidateSucceed = (state, action) => {
    return {
        ...state,
        candidates: action.payload
    }
}

const GetOneCandidateSucceed = (state, action) => {
    return {
        ...state,
        candidate: action.payload
    }
}

const EditCandidateSucceed = (state, action) => {
    const { payload } = action
    const filterCandidate = state.candidates.filter(el => el.user_entity_id !== payload[0].user_entity_id)
    return {
        ...state,
        candidates: [...filterCandidate, payload[0]]
    }
}

export default
    CandidateReduce
