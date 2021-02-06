import * as ActionTypes from "./actionType";
const initialState = {
  isLoading: true,
  data: [],
};
const QuotesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_REQ: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionTypes.GET_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    }
    case ActionTypes.GET_FAIL: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionTypes.POST_SUCEESS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    default:
      return state;
  }
};
export { QuotesReducer };
