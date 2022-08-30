import * as ActionType from '../constants/Batch'

const INIT_STATE = {

    batch: [],
    batchs: [],

}

const batchReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_BATCH_REQUEST:
            return { ...state }
        case ActionType.GET_BATCH_SUCCESS:
            return GetBatchSucceed(state, action)
        case ActionType.DEL_BATCH_REQUEST:
            return { ...state }
        case ActionType.DEL_BATCH_SUCCESS:
            return DelBatchSucceed(state, action)
        case ActionType.ADD_BATCH_REQUEST:
            return { ...state }
        case ActionType.ADD_BATCH_SUCCESS:
            return AddBatchSucceed(state, action)
        case ActionType.GETONE_BATCH_REQUEST:
            return { ...state }
        case ActionType.GETONE_BATCH_SUCCESS:
            return GetOneBatchSucceed(state, action)
        case ActionType.EDIT_BATCH_REQUEST:
            return { ...state }
        case ActionType.EDIT_BATCH_SUCCESS:
            return EditBatchSucceed(state, action)
        case ActionType.EDITNOFILE_BATCH_REQUEST:
            return { ...state }
        case ActionType.EDITNOFILE_BATCH_SUCCESS:
            return EditNoBatchSucceed(state, action)
        default:
            return state
    }
}

const GetBatchSucceed = (state, action) => {
    return {
        ...state,
        batch: action.payload
    }
}

const GetOneBatchSucceed = (state, action) => {
    return {
        ...state,
        batch: action.payload
    }
}

const DelBatchSucceed = (state, action) => {
    const { payload } = action
    const filterBatch = state.batchs.filter(el => el.batch_id !== payload)
    return {
        ...state,
        batchs: [...filterBatch]
    }
}
const AddBatchSucceed = (state, action) => {
    const { payload } = action
    return {
        ...state,
        batchs: [...state.Batch, payload]
    }
}
const EditBatchSucceed = (state, action) => {
    const { payload } = action
    const filterBatch = state.batchs.filter(el => el.batch_id !== payload[0].batch_id)
    return {
        ...state,
        batchs: [...filterBatch, payload[0]]
    }
}
const EditNoBatchSucceed = (state, action) => {
    const { payload } = action
    const filterBatch = state.batchs.filter(el => el.batch_id !== payload[0].batch_id)
    return {
        ...state,
        batchs: [...filterBatch, payload[0]]
    }
}
export default batchReducer