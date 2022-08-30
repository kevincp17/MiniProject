import * as ActionType from '../constants/MasterLocation'

const INIT_STATE = {
    address_types: [],
    address_type:[],

    countries: [],
    country:[],

    provinces: [],
    province:[],

    cities: [],
    city:[]
}

const MasterLocationReduce = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_ADDRESSTYPE_REQUEST:
            return { ...state }
        case ActionType.GET_ADDRESSTYPE_SUCCESS:
            return GetAddressTypeSucceed(state, action)
        case ActionType.DEL_ADDRESSTYPE_REQUEST:
            return { ...state }
        case ActionType.DEL_ADDRESSTYPE_SUCCESS:
            return DelAddressTypeSucceed(state, action)
        case ActionType.ADD_ADDRESSTYPE_REQUEST:
            return { ...state }
        case ActionType.ADD_ADDRESSTYPE_SUCCESS:
            return AddAddressTypeSucceed(state, action)
        case ActionType.GETONE_ADDRESSTYPE_REQUEST:
            return { ...state }
        case ActionType.GETONE_ADDRESSTYPE_SUCCESS:
            return GetOneAddressTypeSuccess(state, action)
        case ActionType.EDIT_ADDRESSTYPE_REQUEST:
            return { ...state }
        case ActionType.EDIT_ADDRESSTYPE_SUCCESS:
            return EditAddressTypeSuccess(state, action)

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
            return state
    }
}

const GetAddressTypeSucceed = (state, action) => {
    return {
        ...state,
        address_types: action.payload
    }
}

const GetOneAddressTypeSuccess = (state, action) => {
    return {
        ...state,
        address_type: action.payload
    }
}

const DelAddressTypeSucceed = (state, action) => {
    const { payload } = action
    const filterAddressType = state.address_types.filter(el => el.adty_id !== payload)
    return {
        ...state,
        address_types: [...filterAddressType]
    }
}
const AddAddressTypeSucceed = (state,action) =>{
    const {payload} = action
    return {
        ...state,
        address_types : [...state.address_types,payload]
    }
}

const EditAddressTypeSuccess = (state, action) => {
    const { payload } = action
    const filterAddressType = state.address_types.filter(el => el.adty_id !== payload[0].adty_id)
    return {
        ...state,
        address_types: [...filterAddressType, payload[0]]
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

export default MasterLocationReduce