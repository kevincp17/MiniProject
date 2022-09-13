import { call, put } from 'redux-saga/effects'
import apiStudentReview from '../../api/api-studentReview'
import { GetStudentReviewSucceed, GetStudentReviewFailed } from '../actions/StudentReview'

function* handleGetStudentReview() {
    try {
        const result = yield call(apiStudentReview.get)
        yield put(GetStudentReviewSucceed(result))
    } catch (error) {
        yield put(GetStudentReviewFailed(error))
    }
}

export {
    handleGetStudentReview
}