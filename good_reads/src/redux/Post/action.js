import { GET_POSTS_FAILURE, GET_POSTS_REQUEST, GET_POSTS_SUCCESS } from "./actionType"
import { UPDATE_POSTS_FAILURE, UPDATE_POSTS_REQUEST, UPDATE_POSTS_SUCCESS } from "./actionType"
import axios from "axios"

const getPostsRequest = (payload) =>{
    return{
        type: GET_POSTS_REQUEST,
        payload
    }
}

const getPostsSuccess = (payload) =>{
    return{
        type: GET_POSTS_SUCCESS,
        payload
    }
}

const getPostsFailure = (payload) =>{
    return{
        type: GET_POSTS_FAILURE,
        payload
    }
}

const getPosts = (payload) => (dispatch) =>{
    dispatch(getPostsRequest);
    return axios
    .get("https://good-reads-users-mock.herokuapp.com/community_updates")
    .then(res => dispatch(getPostsSuccess(res.data)))
    .catch(err => {
        dispatch(getPostsFailure(err))
    })
}



const updatePostsRequest = (payload) =>{
    return{
        type: UPDATE_POSTS_REQUEST,
        payload
    }
}

const updatePostsSuccess = (payload) =>{
    return{
        type: UPDATE_POSTS_SUCCESS,
        payload
    }
}

const updatePostsFailure = (payload) =>{
    return{
        type: UPDATE_POSTS_FAILURE,
        payload
    }
}


const updatePosts = (id, commentObj) => async(dispatch) => {
    try{
        if(commentObj !== null){
            let res = await axios.get(`https://good-reads-users-mock.herokuapp.com/community_updates/${id}`)
            let tempData = res.data.comments;
            tempData.push(commentObj)
            dispatch(updatePostsRequest)
            const det = await axios.patch(`https://good-reads-users-mock.herokuapp.com/community_updates/${id}`,{
                comments : tempData
            })
        }else{
            let res = await axios.get(`https://good-reads-users-mock.herokuapp.com/community_updates/${id}`)
            let tempData = res.data.likes;
            tempData++;
            dispatch(updatePostsRequest)
            const det = await axios.patch(`https://good-reads-users-mock.herokuapp.com/community_updates/${id}`,{
                 likes : tempData
            })
        }
    }catch (err){
        console.log(err);
    }
}

export {updatePosts, getPosts}