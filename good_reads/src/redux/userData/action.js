import { COMMUNITY_UPDATE_SUCCESS, FAILURE, GET_USER_DATA_SUCCESS, REQUEST, USER_UPDATE_SUCCESS } from "./actionType"
import axios from 'axios'

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

const userUpdateSuccess = () => {
    return{
        type : USER_UPDATE_SUCCESS
    }
}

const communityUpdateSuccess = () => {
    return{
        type : COMMUNITY_UPDATE_SUCCESS
    }
}

const getUserDataSuccess = (payload) => {
    return{
        type : GET_USER_DATA_SUCCESS,
        payload : payload
    }
}

const getUserRequestPerformer = (payload) => (dispatch) => {
    dispatch(request())
    return(
        axios.get(`https://good-reads-users-mock.herokuapp.com/users/${payload}`)
        .then((res) => {
            dispatch(getUserDataSuccess(res.data))
        })
        .catch(() => {
            dispatch(failure())
        })
    )
}

const userUpdatePerformer = (payload) => (dispatch) => {
    const {id, private_shelf, to_read, current_reading, completed_books} = payload
    dispatch(request())
    return axios.patch(`https://good-reads-users-mock.herokuapp.com/users/${id}`, {
        private_shelf,
        to_read,
        current_reading,
        completed_books
    })
    .then((res) => {
        dispatch(userUpdateSuccess())
        dispatch(getUserRequestPerformer(1))
    })
    .catch((error) => {
        dispatch(failure())
    })
}

const communityUpdatePerformer = (payload) => (dispatch) => {
    dispatch(request())
    return axios.post(`https://good-reads-users-mock.herokuapp.com/community_updates`,{
        ...payload
    })
    .then(() => {
        dispatch(communityUpdateSuccess())
    })
    .catch(() => {
        dispatch(failure())
    })
}

export {getUserRequestPerformer, userUpdatePerformer, communityUpdatePerformer}