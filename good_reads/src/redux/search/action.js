import axios from "axios"
import { FAILURE, HANDLE_ERROR, REQUEST, GET_SELECTED_BOOK, BOOK_SEARCH_SUCCESS } from "./actionTypes"

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

const getSelectedBook = (payload) => {
    return{
        type : GET_SELECTED_BOOK,
        payload : payload
    }
}

const bookSearchSuccess = (payload) => {
    return{
        type : BOOK_SEARCH_SUCCESS,
        payload : payload
    }
}

let cancel = ""
const bookSearchPerformer = (payload) => (dispatch) => {
    dispatch(request())

    if(cancel){
        cancel.cancel()
    }
    cancel = axios.CancelToken.source()

    return (
        axios.get("https://www.googleapis.com/books/v1/volumes",{
            cancelToken : cancel.token,
            params : {
                q : payload
            }
        })
        .then((res) => {
            dispatch(bookSearchSuccess(res.data))
        })
        .catch(() => {
            dispatch(failure())
        })
    )
}

const bookSearchPerformerByID = (payload) => (dispatch) => {
    dispatch(request())
    return (
        axios.get(`https://www.googleapis.com/books/v1/volumes/${payload}`)
        .then((res) => {
            dispatch(getSelectedBook(res.data))
        })
        .catch(() => {
            dispatch(failure())
        })
    )
}

export {bookSearchPerformer, bookSearchPerformerByID, handleError}