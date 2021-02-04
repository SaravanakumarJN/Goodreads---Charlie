import { FAILURE, HANDLE_ERROR, REQUEST, BOOK_SEARCH_SUCCESS, GET_SELECTED_BOOK } from "./actionTypes"

const initState = {
    isLoading : false,
    isError : false,
    isSuccess : false,
    searchItems : [],
    totalResults : 0,
    selectedBook : null
}

const bookReducer = (state = initState, action) => {
    switch(action.type){
        case REQUEST:{
            return{
                ...state,
                isLoading : true,
                isError : false,
                isSuccess : false,
            }
        }
        case BOOK_SEARCH_SUCCESS:{
            return{
                ...state,
                isLoading: false,
                isError : false,
                isSuccess : true,
                searchItems : action.payload.items,
                totalResults : action.payload.totalItems
            }
        }
        case FAILURE:{
            return{
                ...state,
                isLoading: false,
                isError : true,
                isSuccess : false
            }
        }
        case HANDLE_ERROR:{
            return{
                ...state,
                isError: false
            }
        }
        case GET_SELECTED_BOOK:{
            return{
                ...state,
                isLoading : false,
                isError : false,
                selectedBook : action.payload
            }
        }
        default : {
            return state
        }
    }
}

export {bookReducer}