import * as ActionType from '../constants/Candidate'

export const doGetCandidateRequest =(payload)=>({
    type : ActionType.GET_CANDIDATE_REQUEST,
    payload
})

export const doGetCandidateSucceed =(payload)=>({
    type : ActionType.GET_CANDIDATE_SUCCEED,
    payload
})

export const doGetCandidateFailed =(payload)=>({
    type : ActionType.GET_CANDIDATE_FAILED,
    payload
})