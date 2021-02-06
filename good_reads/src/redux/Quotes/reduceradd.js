import * as ActionTypes from "./actionTypeadd";
const init = {
  data: [],
};
export const reducerAdd = (state = init, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD: {
      console.log("paylaod", payload);
      return {
        ...state,
        data: [...state.data, payload],
      };
    }
    default:
      return state;
  }
};
