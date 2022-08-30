import * as ActionType from '../constants/BatchListConstants'

const INIT_STATE = {
    list: [],
    listOne: []
}

const BatchListReduce = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_BATCHLIST_REQUEST:
            return { ...state }
        case ActionType.GET_BATCHLIST_SUCCEED:
            return GetBatchListSucceed(state, action)
        case ActionType.GETONE_BATCHLIST_REQUEST:
            return { ...state }
        case ActionType.GETONE_BATCHLIST_SUCCEED:
            return GetOneBatchSucceedList(state, action)
        case ActionType.EDIT_BATCHLIST_REQUEST:
            return { ...state }
        case ActionType.EDIT_BATCHLIST_SUCCESS:
            return EditBatchListSucceed(state, action)
        default:
            return state
    }
}

const GetBatchListSucceed = (state, action) => {
    return {
        ...state,
        list: action.payload
    }
}

const GetOneBatchSucceedList = (state, action) => {
    return {
        ...state,
        listOne: action.payload
    }
}

const EditBatchListSucceed = (state, action) => {
    const { payload } = action
    const filter = state.list.filter(el => el.bast_entity_id !== payload[0].bast_entity_id)
    return {
        ...state,
        list: [...filter, payload[0]]
    }
}


export default BatchListReduce
