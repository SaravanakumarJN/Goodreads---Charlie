import * as ActionTypes from "./actionTypes";
const initialState = {
  data: [],
  isLoading: true,
  isPost: false,
};
const disPostReducer = (state = initialState, { type, payload }) => {
  console.log("data", state, payload, type);
  switch (type) {
    case ActionTypes.POST_REQ: {
      return {
        ...state,
        isPost: false,
      };
    }
    case ActionTypes.POST_SUCCESS: {
      return {
        ...state,
        isPost: true,
      };
    }
    case ActionTypes.POST_FAIL: {
      return {
        ...state,
        isPost: false,
      };
    }
    case ActionTypes.GET_REQ: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionTypes.GET_SUCCESS: {
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    }
    case ActionTypes.GET_FAIL: {
      return {
        ...state,
        isLoading: true,
      };
    }

    default:
      return state;
  }
};
export { disPostReducer };
