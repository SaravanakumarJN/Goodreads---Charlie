import * as ActionTypes from "./actionTypeadd";
const add = (payload) => {
  return {
    type: ActionTypes.ADD,
    payload,
  };
};

export { add };
