import axios from "axios"
import { COMMUNITY_UPDATE_SUCCESS, FAILURE, REQUEST, USER_UPDATE_SUCCESS } from "./actionType"

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
        tyoe : USER_UPDATE_SUCCESS
    }
}

const communityUpdateSuccess = () => {
    return{
        type : COMMUNITY_UPDATE_SUCCESS
    }
}

// const communityUpdateSuccess = () => {}

const userUpdatePerformer = (payload) => (dispatch) => {
    dispatch(request())
    return axios.patch("https://good-reads-users-mock.herokuapp.com/users/1", {
        
    })
}