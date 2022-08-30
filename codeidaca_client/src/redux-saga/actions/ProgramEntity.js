import * as ActionType from '../constants/ProgramEntity'

export const GetFourProgramRequest = () => ({
    type : ActionType.GETFOUR_PROGRAM_REQUEST
})

export const GetFourProgramSuccess = (payload) => ({
    type : ActionType.GETFOUR_PROGRAM_SUCCESS,
    payload
})

export const GetFourProgramFailed = (payload) => ({
    type : ActionType.GETFOUR_PROGRAM_FAILED,
    payload
})

export const GetThreeCourseRequest = () => ({
    type : ActionType.GETTHREE_COURSE_REQUEST
})

export const GetThreeCourseSuccess = (payload) => ({
    type : ActionType.GETTHREE_COURSE_SUCCESS,
    payload
})

export const GetThreeCourseFailed = (payload) => ({
    type : ActionType.GETTHREE_COURSE_FAILED,
    payload
})

export const GetAlumniTestimonyRequest = () => ({
    type : ActionType.GETALUMNI_TESTIMONY_REQUEST
})

export const GetAlumniTestimonySuccess = (payload) => ({
    type : ActionType.GETALUMNI_TESTIMONY_SUCCESS,
    payload
})

export const GetAlumniTestimonyFailed = (payload) => ({
    type : ActionType.GETALUMNI_TESTIMONY_FAILED,
    payload
})

