import { FAILURE, GET_USER_DATA_SUCCESS, REQUEST } from "./actionType"

const initState = {
    userData : {},
    isLoading : false,
    isError : false
}

const userReducer = (state = initState, action) => {
    switch(action.type){
        case REQUEST:{
            return{
                ...state,
                isLoading : true,
                isError : false
            }
        }
        case GET_USER_DATA_SUCCESS:{
            return{
                ...state,
                userData : action.payload,
                isLoading : false,
                isError : false
            }
        }
        case FAILURE:{
            return{
                ...state,
                isLoading : false,
                isError : true
            }
        }
        default : {
            return state
        }
    }
}

export {userReducer}