import * as ActionType from '../constants/AddressType'

const INIT_STATE = {
    address_types: [],
    address_type:[]
}

const AddressTypeReduce = (state = INIT_STATE, action) => {
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
        default:
            return GetAddressTypeSucceed(state, action)
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

export default AddressTypeReduce