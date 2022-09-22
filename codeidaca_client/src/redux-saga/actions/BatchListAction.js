import * as ActionType from '../constants/BatchListConstants'


//GET LIST
export const GetBatchRequestList = () => ({
    type: ActionType.GET_BATCHLIST_REQUEST
});

export const GetBatchSucceedList = (payload) => ({
    type: ActionType.GET_BATCHLIST_SUCCEED,
    payload,
});

export const GetBatchFailedList = (payload) => ({
    type: ActionType.GET_BATCHLIST_FAILED,
    payload,
});

//Get One 
export const GetOneBatchRequestList = (payload) => ({
    type : ActionType.GETONE_BATCHLIST_REQUEST,
    payload
})

export const GetOneBatchSucceedList = (payload) => ({
    type : ActionType.GETONE_BATCHLIST_SUCCEED,
    payload
})

export const GetOneBatchFailedList = (payload) => ({
    type : ActionType.GETONE_BATCHLIST_FAILED,
    payload
})


//Edit
export const EditBatchListRequest = (payload) => ({
    type : ActionType.EDIT_BATCHLIST_REQUEST,
    payload
})


export const EditBatchListSucceed = (payload) => ({
    type : ActionType.EDIT_BATCHLIST_SUCCESS,
    payload
})

export const EditBatchListFailed = (payload) => ({
    type : ActionType.EDIT_BATCHLIST_FAILED,
    payload
})

//get batch name  
export const GetBatchRequest = () => ({
    type : ActionType.GET_BATCH_REQUEST
  })
  
  export const GetBatchSuccess = (payload) => ({
    type : ActionType.GET_BATCH_SUCCESS,
    payload
  })
  
  export const GetBatchFailed = (payload) => ({
    type : ActionType.GET_BATCH_FAILED,
    payload
  })