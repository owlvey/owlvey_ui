import types from "./types";

const setCurrentProduct = productId => ({
  type: types.SET_CURRENT_PRODUCT,
  productId
});

const cleanState = () => ({ type: types.PRODUCT_CLEAN_STATE });

export { setCurrentProduct, cleanState };
