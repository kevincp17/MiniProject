import * as ActionType from '../constants/ProgramEntity'

const INIT_STATE = {
    program_entities: [],
    program_entities_course: [],
    alumni_testimonies: [],
    program_entity:[]
}

const ProgramEntityReduce = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GETFOUR_PROGRAM_REQUEST:
            return { ...state }
        case ActionType.GETFOUR_PROGRAM_SUCCESS:
            return GetFourProgramSucceed(state, action)
        case ActionType.GETTHREE_COURSE_REQUEST:
            return { ...state }
        case ActionType.GETTHREE_COURSE_SUCCESS:
            return GetThreeCourseSucceed(state, action)
        case ActionType.GETALUMNI_TESTIMONY_REQUEST:
            return { ...state }
        case ActionType.GETALUMNI_TESTIMONY_SUCCESS:
            return GetAlumniTestimonySucceed(state, action)
        default:
            return GetFourProgramSucceed(state, action)
    }
}

const GetFourProgramSucceed = (state, action) => {
    return {
        ...state,
        program_entities: action.payload
    }
}

const GetThreeCourseSucceed = (state, action) => {
    return {
        ...state,
        program_entities_course: action.payload
    }
}

const GetAlumniTestimonySucceed = (state, action) => {
    return {
        ...state,
        alumni_testimonies: action.payload
    }
}

export default ProgramEntityReduce