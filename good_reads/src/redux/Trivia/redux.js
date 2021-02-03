import * as ActinTypes from "./actionTypes";

const initialState = {
  question: [],
  isLoading: true,
};
const TriviaReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActinTypes.GET_QUIZ_REQ: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActinTypes.GET_QUIZ_SUCCESS: {
      return {
        ...state,
        question: payload,
        isLoading: false,
      };
    }
    case ActinTypes.GET_QUIZ_FAIL: {
      return {
        ...state,
        isLoading: true,
      };
    }
    default:
      return state;
  }
};
export { TriviaReducer };
