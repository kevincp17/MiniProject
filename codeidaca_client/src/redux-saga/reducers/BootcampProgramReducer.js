import * as ActionType from '../constants/BootcampProgram'

const INIT_STATE = {
    bootcampProgram: [],
}

const bootcampProgramReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_BOOTCAMPPROGRAM_REQUEST:
            return { ...state }
        case ActionType.GET_BOOTCAMPPROGRAM_SUCCEED:
            return GetBootcampProgramSucceed(state, action)
        case ActionType.GET_SEARCHPROGRAM_REQUEST:
            return { ...state }
        case ActionType.GET_SEARCHPROGRAM_SUCCEED:
            return GetSearchProgramSucceed(state, action)
        default:
            return state
    }
}

const GetBootcampProgramSucceed = (state, action) => {
    return {
        ...state,
        bootcampProgram: action.payload
    }
}

const GetSearchProgramSucceed = (state, action) => {
    return {
        ...state,
        bootcampProgram: action.payload
    }
}

export default bootcampProgramReducer