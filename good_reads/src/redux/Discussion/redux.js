import * as ActionTypes from "./actionTypes";
const initialState = {
  data: [],
  isLoading: false,
  isLoading1: false,
  comments: [],
  isLoading2: false,
};
const disPostReducer = (state = initialState, { type, payload }) => {
  console.log("data", state, payload, type);
  switch (type) {
    case ActionTypes.GET_POST_REQ:
      return {
        ...state,
        isLoading: false,
      };
    case ActionTypes.GET_POST_SUCSESS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionTypes.GET_POST_FAIL: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case ActionTypes.GET_REQ: {
      return {
        ...state,
        isLoading1: false,
      };
    }
    case ActionTypes.GET_SUCSESS: {
      return {
        ...state,
        data: payload,
        isLoading1: true,
      };
    }
    case ActionTypes.GET_FAIL: {
      return {
        ...state,
        isLoading1: false,
      };
    }

    //for commnets
    case ActionTypes.POST1_REQ:
      return {
        ...state,
        isLoading2: false,
      };
    case ActionTypes.POST1_SUCSESS: {
      return {
        ...state,
        isLoading2: true,
      };
    }
    case ActionTypes.POST1_FAIL: {
      return {
        ...state,
        isLoading2: false,
      };
    }
    case ActionTypes.GET_POST1_SUCSESS: {
      return {
        ...state,
        comments: payload,
        isLoading2: true,
      };
    }
    case ActionTypes.GET_POST1_FAIL: {
      return {
        ...state,
        isLoading2: false,
      };
    }
    default:
      return state;
  }
};
export { disPostReducer };
