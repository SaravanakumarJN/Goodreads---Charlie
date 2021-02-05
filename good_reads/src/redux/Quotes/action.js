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
export const getData = (params = {}) => (dispatch) => {
  dispatch(getReq());
  console.log("quotes", params);
  axios
    .get("https://json-server-test-mocker-him.herokuapp.com/quotes", {
      params,
    })
    .then((res) => {
      dispatch(getSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getFail(err));
    });
};
