import { Login, Register, UserName } from "./actionType";

const init = {
  response: "",
  login:null,
  userName:""
};

export const landingPage_reducers = (state = init, { type, payload }) => {
  switch (type) {
    case Register:
      return {
        ...state,
        response: payload,
      };
    case Login:
      return {
        ...state,
        login: payload,
      };
    case UserName:
      return {
        ...state,
        userName: payload,
      };
    default:
      return state;
  }
};
