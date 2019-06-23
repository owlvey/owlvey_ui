import types from "./types";

const initialState = {
  auth: {},
  user: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_SUCCESS:
      return { ...state, auth: action.auth };
    case types.AUTH_USER_SUCCESS:
      return { ...state, user: action.user };
    case types.AUTH_CLEAN_STATE:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
