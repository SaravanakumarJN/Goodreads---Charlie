import * as ActionTypes from "./actionType";
import axios from "axios";
const getReq = () => {
  return {
    type: ActionTypes.GET_REQ,
  };
};
const getSuccess = (payload) => {
  return {
    type: ActionTypes.GET_SUCCESS,
    payload,
  };
};
const getFail = (payload) => {
  return {
    type: ActionTypes.GET_FAIL,
  };
};
export const getData = (payload) => (dispatch) => {
  dispatch(getReq());
  axios
    .get("https://json-server-test-mocker-him.herokuapp.com/quotes")
    .then((res) => {
      dispatch(getSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getFail(err));
    });
};
