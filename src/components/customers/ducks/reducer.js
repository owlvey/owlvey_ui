import types from "./types";

const initialState = { current: null };

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_CUSTOMER: {
      return { ...state, current: action.customerId };
    }
    case types.CUSTOMER_CLEAN_STATE:
      return initialState;
    default:
      return state;
  }
};

export default customerReducer;
