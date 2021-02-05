import { GET_BOOKS_FAILURE, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS } from "./actionType"
import axios from "axios"
const getBooksRequest = (payload) =>{
    return{
        type: GET_BOOKS_REQUEST,
        payload
    }
}

const getBooksSuccess = (payload) =>{
    return{
        type: GET_BOOKS_SUCCESS,
        payload
    }
}

const getBooksFailure = (payload) =>{
    return{
        type: GET_BOOKS_FAILURE,
        payload
    }
}

const getBooks = (payload) => (dispatch) =>{
    dispatch(getBooksRequest);
    axios.get("http://localhost:3000/people")
    .then(res => dispatch(getBooksSuccess(res.data[0])))
    .catch(err => {
        dispatch(getBooksFailure(err))
    })
}

export {getBooks}