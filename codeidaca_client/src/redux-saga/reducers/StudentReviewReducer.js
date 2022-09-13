import * as ActionType from '../constants/StudentReview'

const INIT_STATE = {
    studentReview: []
}

const StudentReviewReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_STUDENTREVIEW_REQUEST:
            return { ...state }
        case ActionType.GET_STUDENTREVIEW_SUCCEED:
            return GetStudentReviewSucceed(state, action)
        default:
            return state
    }
}

const GetStudentReviewSucceed = (state, action) => {
    return {
        ...state,
        studentReview: action.payload
    }
}

export default StudentReviewReducer