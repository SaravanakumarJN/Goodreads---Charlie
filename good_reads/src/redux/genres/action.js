import axios from "axios"
import { FAILURE, HANDLE_ERROR, REQUEST, SET_SELECTED_BOOK, GENRE_SEARCH_SUCCESS} from "./actionTypes"

const request = () => {
    return{
        type : REQUEST
    }
}

const failure = () => {
    return{
        type : FAILURE
    }
}

const handleError = () => {
    return{
        type : HANDLE_ERROR
    }
}

const setSelectedBook = (payload) => {
    return{
        type : SET_SELECTED_BOOK,
        payload : payload
    }
}

const genreSearchSuccess = (payload) => {
    return{
        type : GENRE_SEARCH_SUCCESS,
        payload : payload
    }
}

const genreSearchPerformer = (payload) => (dispatch) => {
    dispatch(request())
    return (
        axios.get("https://www.googleapis.com/books/v1/volumes", {
            params : {
                q : `subject:${payload}`,
                maxResults : 40
            }
        })
        .then((res) => {
            dispatch(genreSearchSuccess(res.data))
        })
        .catch(() => {
            dispatch(failure())
        }) 
    )
} 

export {genreSearchPerformer, handleError, setSelectedBook}