import {call,put} from 'redux-saga/effects'
import apiProgramEntity from '../../api/api-program-entity'
import { GetFourProgramSuccess,GetFourProgramFailed,GetThreeCourseSuccess,GetThreeCourseFailed,GetAlumniTestimonySuccess,GetAlumniTestimonyFailed } from '../actions/ProgramEntity'

function* handleGetFourProgram(){
    try {
        const result = yield call(apiProgramEntity.listFour)
        yield put(GetFourProgramSuccess(result))
    } catch (error) {
        yield put(GetFourProgramFailed(error))
    }
}

function* handleGetThreeCourse(){
    try {
        const result = yield call(apiProgramEntity.listThree)
        yield put(GetThreeCourseSuccess(result))
    } catch (error) {
        yield put(GetThreeCourseFailed(error))
    }
}

function* handleGetAlumniTestimony(){
    try {
        const result = yield call(apiProgramEntity.listSix)
        yield put(GetAlumniTestimonySuccess(result))
    } catch (error) {
        yield put(GetAlumniTestimonyFailed(error))
    }
}

export {
    handleGetFourProgram,
    handleGetThreeCourse,
    handleGetAlumniTestimony
}