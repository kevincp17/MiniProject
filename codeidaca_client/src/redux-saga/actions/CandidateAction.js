import * as ActionType from '../constants/CandidateConstant'

export const GetCandidateRequest = () => ({
    type: ActionType.GET_CANDIDATE_REQUEST
})

export const GetCandidateSuccess = (payload) => ({
    type: ActionType.GET_CANDIDATE_SUCCESS,
    payload
})

export const GetCandidateFailed = (payload) => ({
    type: ActionType.GET_CANDIDATE_FAILED,
    payload
})

export const GetOneCandidateRequest = (payload) => ({
    type : ActionType.GETONE_CANDIDATE_REQUEST,
    payload
})

export const GetOneCandidateSuccess = (payload) => ({
    type : ActionType.GETONE_CANDIDATE_SUCCESS,
    payload
})

export const GetOneCandidateFailed = (payload) => ({
    type : ActionType.GETONE_CANDIDATE_FAILED,
    payload
})

export const EditCandidateRequest = (payload) => ({
    type: ActionType.EDIT_CANDIDATE_REQUEST,
    payload
})

export const EditCandidateSuccess = (payload) => ({
    type: ActionType.EDIT_CANDIDATE_SUCCESS,
    payload
})

export const EditCandidateFailed = (payload) => ({
    type: ActionType.EDIT_CANDIDATE_FAILED,
    payload
})
