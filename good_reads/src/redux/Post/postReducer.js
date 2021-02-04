import { GET_POSTS_FAILURE, GET_POSTS_REQUEST, GET_POSTS_SUCCESS } from "./actionType";
import { UPDATE_POSTS_FAILURE, UPDATE_POSTS_REQUEST, UPDATE_POSTS_SUCCESS } from "./actionType";
const initState = {
    posts : [],
    isLoading: false,
    isError: false
}

const postReducer = (state = initState, {type, payload}) =>{
    switch (type) {
        case GET_POSTS_REQUEST:
            return{
                ...state,
                posts : [],
                isLoading: false,
                isError: false
            }
        case GET_POSTS_SUCCESS:
            const allPosts = [...initState.posts, payload]
            
            return{
                ...state,
                posts: allPosts,
                isLoading: false,
                isError: false
            }
        case GET_POSTS_FAILURE:
            return{
                ...state,
                isLoading: false,
                isError: true
            }     
        case UPDATE_POSTS_REQUEST:
            return{
                ...state,
                posts : [],
                isLoading: false,
                isError: false
            }
        case UPDATE_POSTS_SUCCESS:
            const allPosts2 = [...initState.posts, payload]
            
            return{
                ...state,
                posts: allPosts2,
                isLoading: false,
                isError: false
            }
        case UPDATE_POSTS_FAILURE:
            return{
                ...state,
                isLoading: false,
                isError: true
            } 
        
    
        default:
            return{
                ...state,
            }
    }
}

export {postReducer}