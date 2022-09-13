import * as ActionType from '../constants/StudentReview'

export const GetStudentReviewRequest = () => ({
    type : ActionType.GET_STUDENTREVIEW_REQUEST
})

export const GetStudentReviewSucceed = (payload) => ({
    type : ActionType.GET_STUDENTREVIEW_SUCCEED,
    payload
})

export const GetStudentReviewFailed = () => ({
    type : ActionType.GET_STUDENTREVIEW_FAILED
})