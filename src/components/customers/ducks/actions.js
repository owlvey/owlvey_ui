import types from "./types";

const setCurrentCustomer = customerId => ({
  type: types.SET_CURRENT_CUSTOMER,
  customerId,
});

const clearStore = () => ({ type: types.SET_CURRENT_CUSTOMER });

export { setCurrentCustomer, clearStore };
