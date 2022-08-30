import * as ActionType from '../constants/City'

const INIT_STATE = {
    cities: [],
    city:[]
}

const CityReduce = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_CITY_REQUEST:
            return { ...state }
        case ActionType.GET_CITY_SUCCESS:
            return GetCitySucceed(state, action)
        case ActionType.DEL_CITY_REQUEST:
            return { ...state }
        case ActionType.DEL_CITY_SUCCESS:
            return DelCitySucceed(state, action)
        case ActionType.ADD_CITY_REQUEST:
            return { ...state }
        case ActionType.ADD_CITY_SUCCESS:
            return AddCitySucceed(state, action)
        case ActionType.GETONE_CITY_REQUEST:
            return { ...state }
        case ActionType.GETONE_CITY_SUCCESS:
            return GetOneCitySuccess(state, action)
        case ActionType.EDIT_CITY_REQUEST:
            return { ...state }
        case ActionType.EDIT_CITY_SUCCESS:
            return EditCitySuccess(state, action)
        default:
            return GetCitySucceed(state, action)
    }
}

const GetCitySucceed = (state, action) => {
    return {
        ...state,
        cities: action.payload
    }
}

const GetOneCitySuccess = (state, action) => {
    return {
        ...state,
        city: action.payload
    }
}

const DelCitySucceed = (state, action) => {
    const { payload } = action
    const filterCity = state.cities.filter(el => el.city_id !== payload)
    return {
        ...state,
        cities: [...filterCity]
    }
}
const AddCitySucceed = (state,action) =>{
    const {payload} = action
    return {
        ...state,
        cities : [...state.cities,payload]
    }
}

const EditCitySuccess = (state, action) => {
    const { payload } = action
    const filterCity = state.cities.filter(el => el.city_id !== payload[0].city_id)
    return {
        ...state,
        cities: [...filterCity, payload[0]]
    }
}

export default CityReduce