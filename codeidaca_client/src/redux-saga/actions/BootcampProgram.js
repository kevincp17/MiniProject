import * as ActionType from '../constants/BootcampProgram'

export const GetBootcampProgramRequest = (payload) => ({
    type: ActionType.GET_BOOTCAMPPROGRAM_REQUEST,
    payload
})
export const GetBootcampProgramSucceed = (payload) => ({
    type: ActionType.GET_BOOTCAMPPROGRAM_SUCCEED,
    payload
})
export const GetBootcampProgramFailed = (payload) => ({
    type: ActionType.GET_BOOTCAMPPROGRAM_FAILED,
    payload
})

export const GetSearchProgramRequest = (payload) => ({
    type: ActionType.GET_SEARCHPROGRAM_REQUEST,
    payload
})
export const GetSearchProgramSucceed = (payload) => ({
    type: ActionType.GET_SEARCHPROGRAM_SUCCEED,
    payload
})
export const GetSearchProgramFailed = (payload) => ({
    type: ActionType.GET_SEARCHPROGRAM_FAILED,
    payload
})