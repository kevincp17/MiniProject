import * as ActionType from '../constants/Province'

const INIT_STATE = {
    provinces: [],
    province:[]
}

const ProvinceReduce = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_PROVINCE_REQUEST:
            return { ...state }
        case ActionType.GET_PROVINCE_SUCCESS:
            return GetProvinceSucceed(state, action)
        case ActionType.DEL_PROVINCE_REQUEST:
            return { ...state }
        case ActionType.DEL_PROVINCE_SUCCESS:
            return DelProvinceSucceed(state, action)
        case ActionType.ADD_PROVINCE_REQUEST:
            return { ...state }
        case ActionType.ADD_PROVINCE_SUCCESS:
            return AddProvinceSucceed(state, action)
        case ActionType.GETONE_PROVINCE_REQUEST:
            return { ...state }
        case ActionType.GETONE_PROVINCE_SUCCESS:
            return GetOneProvinceSuccess(state, action)
        case ActionType.EDIT_PROVINCE_REQUEST:
            return { ...state }
        case ActionType.EDIT_PROVINCE_SUCCESS:
            return EditProvinceSuccess(state, action)
        default:
            return GetProvinceSucceed(state, action)
    }
}

const GetProvinceSucceed = (state, action) => {
    return {
        ...state,
        provinces: action.payload
    }
}

const GetOneProvinceSuccess = (state, action) => {
    return {
        ...state,
        province: action.payload
    }
}

const DelProvinceSucceed = (state, action) => {
    const { payload } = action
    const filterProvince = state.provinces.filter(el => el.prov_id !== payload)
    return {
        ...state,
        provinces: [...filterProvince]
    }
}
const AddProvinceSucceed = (state,action) =>{
    const {payload} = action
    return {
        ...state,
        provinces : [...state.provinces,payload]
    }
}

const EditProvinceSuccess = (state, action) => {
    const { payload } = action
    const filterProvince = state.provinces.filter(el => el.prov_id !== payload[0].prov_id)
    return {
        ...state,
        provinces: [...filterProvince, payload[0]]
    }
}

export default ProvinceReduce