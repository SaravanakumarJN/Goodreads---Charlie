import * as ActionTypes from "./actionTypes";
import axios from "axios";
const getReq = () => {
  return {
    type: ActionTypes.GET_POST_REQ,
  };
};
const getSuccess = (payload) => {
  return {
    type: ActionTypes.GET_POST_SUCSESS,
    payload,
  };
};
const getFail = (payload) => {
  return {
    type: ActionTypes.GET_POST_FAIL,
    payload,
  };
};
const getDataReq = () => {
  return {
    type: ActionTypes.GET_REQ,
  };
};
const getDataSuccess = (payload) => {
  return {
    type: ActionTypes.GET_SUCSESS,
    payload,
  };
};
const getDataFail = (payload) => {
  return {
    type: ActionTypes.GET_FAIL,
    payload,
  };
};
export const getPostDis = (payload) => (dispatch) => {
  console.log(payload);
  dispatch(getReq());
  axios
    .post("https://json-server-test-mocker-him.herokuapp.com/posts", {
      bookname: payload.bookname,
      topic: payload.topic,
      comment: payload.comment,
      addBook: payload.addBook,
      author: payload.author,
      id: 1,
    })
    .then((res) => {
      dispatch(getDataReq());
      axios
        .get("https://json-server-test-mocker-him.herokuapp.com/posts/1")
        .then((res) => {
          console.log("res", res.data);
          dispatch(getDataSuccess(res.data));
        })
        .catch((err) => {
          dispatch(getDataFail(err));
        });
    })
    .catch((err) => {
      dispatch(getFail(err));
    });
};
// export const getDataPost = (payload) => (dispatch) => {

//   return axios

// };
//for the particular comment to post

const postReq1 = () => {
  return {
    type: ActionTypes.POST1_REQ,
  };
};
const postSuccess1 = (payload) => {
  return {
    type: ActionTypes.POST1_SUCSESS,
    payload,
  };
};
const postFail1 = (payload) => {
  return {
    type: ActionTypes.POST1_FAIL,
    payload,
  };
};
const getPost1Req = () => {
  return {
    type: ActionTypes.GET_POST1_REQ,
  };
};
const getPost1Success = (payload) => {
  return {
    type: ActionTypes.GET_POST1_SUCSESS,
    payload,
  };
};
const getPost1Fail = (payload) => {
  return {
    type: ActionTypes.GET_POST1_FAIL,
    payload,
  };
};

export const Post1Dis = (payload) => (dispatch) => {
  console.log(payload);
  dispatch(postReq1());
  axios
    .post("https://json-server-test-mocker-him.herokuapp.com/postcomments", {
      comment: payload.post,
    })
    .then((res) => {
      axios
        .get("https://json-server-test-mocker-him.herokuapp.com/postcomments/4")
        .then((res) => {
          dispatch(getPost1Success(res.data));
        })
        .catch((err) => {
          dispatch(getPost1Fail(err));
        });
    })
    .catch((err) => {
      dispatch(postFail1(err));
    });
};
