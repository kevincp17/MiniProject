import * as ActionType from '../constants/CandidateContractedConstant'

export const GetCandidateRequestContracted = () => ({
    type: ActionType.GET_CANDIDATECONTRACTED_REQUEST
})

export const GetCandidateSuccessContracted = (payload) => ({
    type: ActionType.GET_CANDIDATECONTRACTED_SUCCESS,
    payload
})

export const GetCandidateFailedContracted = (payload) => ({
    type: ActionType.GET_CANDIDATECONTRACTED_FAILED,
    payload
})

export const EditCandidateRequestContracted = (payload) => ({
    type: ActionType.EDIT_CANDIDATECONTRACTED_REQUEST,
    payload
})

export const EditCandidateSuccessContracted = (payload) => ({
    type: ActionType.EDIT_CANDIDATECONTRACTED_SUCCESS,
    payload
})

export const EditCandidateFailedContracted = (payload) => ({
    type: ActionType.EDIT_CANDIDATECONTRACTED_FAILED,
    payload
})