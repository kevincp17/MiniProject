import * as ActionType from '../constants/Country'

const INIT_STATE = {
    countries: [],
    country:[]
}

const CountryReduce = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_COUNTRY_REQUEST:
            return { ...state }
        case ActionType.GET_COUNTRY_SUCCESS:
            return GetCountrySucceed(state, action)
        case ActionType.DEL_COUNTRY_REQUEST:
            return { ...state }
        case ActionType.DEL_COUNTRY_SUCCESS:
            return DelCountrySucceed(state, action)
        case ActionType.ADD_COUNTRY_REQUEST:
            return { ...state }
        case ActionType.ADD_COUNTRY_SUCCESS:
            return AddCountrySucceed(state, action)
        case ActionType.GETONE_COUNTRY_REQUEST:
            return { ...state }
        case ActionType.GETONE_COUNTRY_SUCCESS:
            return GetOneCountrySuccess(state, action)
        case ActionType.EDIT_COUNTRY_REQUEST:
            return { ...state }
        case ActionType.EDIT_COUNTRY_SUCCESS:
            return EditCountrySuccess(state, action)
        default:
            return GetCountrySucceed(state, action)
    }
}

const GetCountrySucceed = (state, action) => {
    return {
        ...state,
        countries: action.payload
    }
}

const GetOneCountrySuccess = (state, action) => {
    return {
        ...state,
        country: action.payload
    }
}

const DelCountrySucceed = (state, action) => {
    const { payload } = action
    const filterCountry = state.countries.filter(el => el.country_code !== payload)
    return {
        ...state,
        countries: [...filterCountry]
    }
}
const AddCountrySucceed = (state,action) =>{
    const {payload} = action
    return {
        ...state,
        countries : [...state.countries,payload]
    }
}

const EditCountrySuccess = (state, action) => {
    const { payload } = action
    const filterCountry = state.countries.filter(el => el.country_code !== payload[0].country_code)
    return {
        ...state,
        countries: [...filterCountry, payload[0]]
    }
}

export default CountryReduce