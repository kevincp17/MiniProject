import * as ActionType from "../constants/BootcampApply"

export const GetBootcampRequest = (payload) => ({
    type: ActionType.GET_BOOTCAMP_REQUEST,
    payload
})

export const GetBootcampSuceess = (payload) => ({
    type: ActionType.GET_BOOTCAMP_SUCCEED,
    payload
})

export const GetBootcampFailed = (payload) => ({
    type: ActionType.GET_BOOTCAMP_FAILED,
    payload
})

export const ApplyBootcampRequest = (payload) => ({
    type: ActionType.APPLY_BOOTCAMP_REQUEST,
    payload
})

export const ApplyBootcampSuccess = (payload) => ({
    type: ActionType.APPLY_BOOTCAMP_SUCCEED,
    payload
})

export const ApplyBootcampFailed = (payload) => ({
    type: ActionType.APPLY_BOOTCAMP_FAILED,
    payload
})

export const ResetApplyBootcampRequest = () => ({
    type: ActionType.RESET_APPLY_BOOTCAMP_REQUEST,
    payload: ""
})

export const ResetApplyBootcampSuccess = (payload) => ({
    type: ActionType.RESET_APPLY_BOOTCAMP_SUCCEED,
    payload
})

export const ResetApplyBootcampFailed = (payload) => ({
    type: ActionType.RESET_APPLY_BOOTCAMP_FAILED,
    payload
})