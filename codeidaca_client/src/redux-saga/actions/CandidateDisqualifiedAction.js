import * as ActionType from '../constants/CandidateDisqualifiedConstant'

export const GetCandidateRequestDisqulified = () => ({
    type: ActionType.GET_CANDIDATEDISQUALIFIED_REQUEST
})

export const GetCandidateSuccessDisqulified = (payload) => ({
    type: ActionType.GET_CANDIDATEDISQUALIFIED_SUCCESS,
    payload
})

export const GetCandidateFailedDisqulified = (payload) => ({
    type: ActionType.GET_CANDIDATEDISQUALIFIED_FAILED,
    payload
})