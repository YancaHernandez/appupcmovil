import { AUTH_LOGUIN, AUTH_LOGUOT } from "./types";

export default (state, action) => {
  switch (action.type) {
    case AUTH_LOGUIN:
      return {
        ...state,
        user: action.payload,
        loggued: true,
      };
    case AUTH_LOGUOT:
      return {
        ...state,
        user: null,
        loggued: false,
      };
    default:
      break;
  }
};
