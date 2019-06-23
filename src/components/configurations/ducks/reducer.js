import types from "./types";

const initialState = {
  apiUrl: null
};

const appConfReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RECEIVE_API_URL: {
      return { ...state, apiUrl: action.apiUrl };
    }
    case types.CONFIGURATION_CLEAN_STATE:
      return initialState;
    default:
      return state;
  }
};

export default appConfReducer;
