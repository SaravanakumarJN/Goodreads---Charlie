import * as ACtionTypes from "./actionTypes";
import axios from "axios";

const getQuesReq = () => {
  return {
    type: ACtionTypes.GET_QUIZ_REQ,
  };
};
const getQuesSuccess = (payload) => {
  return {
    type: ACtionTypes.GET_QUIZ_SUCCESS,
    payload,
  };
};
const getQuesFail = () => {
  return {
    type: ACtionTypes.GET_QUIZ_FAIL,
  };
};
export const getQuesData = (payload) => (dispatch) => {
  dispatch(getQuesReq());
  axios
    .get(
      "https://opentdb.com/api.php?amount=20&category=10&difficulty=medium&type=multiple"
    )
    .then((res) => {
      console.log("wues", res.data);
      dispatch(getQuesSuccess(res.data.results));
    })
    .catch((err) => {
      dispatch(getQuesFail(err));
    });
};
