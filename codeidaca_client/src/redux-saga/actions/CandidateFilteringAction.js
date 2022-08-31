import * as ActionType from '../constants/CandidateFilteringConstant'

export const GetCandidateRequestFiltering = () => ({
    type: ActionType.GET_CANDIDATEFILTERING_REQUEST
})

export const GetCandidateSuccessFiltering = (payload) => ({
    type: ActionType.GET_CANDIDATEFILTERING_SUCCESS,
    payload
})

export const GetCandidateFailedFiltering = (payload) => ({
    type: ActionType.GET_CANDIDATEFILTERING_FAILED,
    payload
})