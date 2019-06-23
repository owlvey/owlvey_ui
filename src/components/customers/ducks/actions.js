import types from "./types";

const setCurrentCustomer = customerId => ({
  type: types.SET_CURRENT_CUSTOMER,
  customerId
});

const cleanState = () => ({ type: types.CUSTOMER_CLEAN_STATE });

export { setCurrentCustomer, cleanState };
