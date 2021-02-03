import { FAILURE, HANDLE_ERROR, REQUEST, GENRE_SEARCH_SUCCESS, SET_SELECTED_BOOK } from "./actionTypes"

const initState = {
    isLoading : false,
    isError : false,
    isSuccess : false,
    genreItems : [],
    totalResults : 0,
    selectedBook : null
}

const genreReducer = (state = initState, action) => {
    switch(action.type){
        case REQUEST:{
            return{
                ...state,
                isLoading : true,
                isError : false,
                isSuccess : false,
            }
        }
        case GENRE_SEARCH_SUCCESS:{
            return{
                ...state,
                isLoading: false,
                isError : false,
                isSuccess : true,
                genreItems : action.payload.items,
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
        case SET_SELECTED_BOOK:{
            const selected = state.genreItems.find((item) => item.id === action.payload)
            return{
                ...state,
                selectedBook : selected
            }
        }
        default : {
            return state
        }
    }
}

export {genreReducer}