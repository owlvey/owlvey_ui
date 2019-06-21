import types from "./types";

const setCurrentProduct = productId => ({
  type: types.SET_CURRENT_PRODUCT,
  productId,
});

const clearStore = () => ({ type: types.CLEAR_STORE });

export { setCurrentProduct, clearStore };
