import * as ActionType from '../constants/CandidateNotrespondingConstant'

export const GetCandidateRequestNotresponding = () => ({
    type: ActionType.GET_CANDIDATENOTRESPONDING_REQUEST
})

export const GetCandidateSuccessNotresponding = (payload) => ({
    type: ActionType.GET_CANDIDATENOTRESPONDING_SUCCESS,
    payload
})

export const GetCandidateFailedNotresponding = (payload) => ({
    type: ActionType.GET_CANDIDATENOTRESPONDING_FAILED,
    payload
})