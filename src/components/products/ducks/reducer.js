import types from "./types";

const initialState = {
  current: null
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_CURRENT_PRODUCT:
      return { ...state, current: action.productId };
    case types.PRODUCT_CLEAN_STATE:
      return initialState;
    default:
      return state;
  }
}

export default productReducer;
