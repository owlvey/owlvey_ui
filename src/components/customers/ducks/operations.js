import request from "helper/request";
import { entityActions } from "ducks";

const getCustomers = () => {
  return (dispatch, getState) => {
    const { apiUrl } = getState().conf;
    dispatch(entityActions.getCollectionStart("customer"));
    return request
      .get(`${apiUrl}/customers`)
      .then(customers => {
        dispatch(entityActions.addCollection("customer", customers));
        dispatch(entityActions.getColletionSuccess("customer"));
        return customers;
      })
      .catch(error => {
        dispatch(entityActions.getCollectionError("customer", error.message));
        throw error;
      });
  };
};

const addCustomer = customer => {
  return (dispatch, getState) => {
    const { apiUrl } = getState().conf;
    return request.post(`${apiUrl}/customers`, customer).then(customerAdded => {
      dispatch(entityActions.addCollection("customer", [customerAdded]));
      return customerAdded;
    });
  };
};

const editCustomer = customer => {
  return (dispatch, getState) => {
    const { apiUrl } = getState().conf;
    return request
      .put(`${apiUrl}/customers/${customer.customerId}`, {
        name: customer.name,
        avatar: customer.avatar
      })
      .then(editedCustomer => {
        let customertRd = {
          ...getState().entity["customer"][customer.customerId],
          name: customer.name,
          avatar: customer.avatar
        };
        dispatch(
          entityActions.updateEntity(
            "customer",
            customertRd,
            customer.customerId
          )
        );
        return editedCustomer;
      });
  };
};

const deleteCustomer = customerId => {
  return (dispatch, getState) => {
    const { apiUrl } = getState().conf;
    return request
      .delete(`${apiUrl}/customers/${customerId}`)
      .then(customerDeleted => {
        dispatch(entityActions.removeEntity("customer", customerId));
        return customerDeleted;
      });
  };
};

export { addCustomer, editCustomer, deleteCustomer, getCustomers };
