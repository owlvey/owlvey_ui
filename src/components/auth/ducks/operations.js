import request from "helper/request";
import { setCookieAuth, deleteCookieAuth } from "./selectors";
import {
  entityActions,
  customerOperations,
  customerActions,
  authActions,
  productActions,
  productOperations,
  configurationActions,
  modalActions
} from "ducks";

const createUser = user => {
  return (dispatch, getState) => {
    const { apiUrl } = getState().conf;
    return request.post(`${apiUrl}/users`, user);
  };
};

const doLogin = (username, password) => {
  return (dispatch, getState) => {
    const { apiUrl } = getState().conf;
    return new Promise((resolve, reject) => {
      request
        .post(`${apiUrl}/sessions`, { username, password })
        .then(auth => {
          setCookieAuth(auth);
          loadCurrentUserInformation(dispatch, auth, resolve, reject);
        })
        .catch(error => {
          reject(error);
        });
    });
  };
};

const loadCurrentUserInformation = (dispatch, auth, resolve, reject) => {
  dispatch(authActions.recieveAuth(auth));
  dispatch(currentUser())
    .then(user => {
      dispatch(authActions.recieveAuthUser(user));
      dispatch(customerOperations.getCustomers())
        .then(customers => {
          if (customers && customers.length > 0) {
            const customerId = customers[0].customerId;
            dispatch(customerActions.setCurrentCustomer(customerId));
            dispatch(productOperations.getProductsByCustomer(customerId)).then(
              products => {
                if (products && products.length > 0) {
                  dispatch(
                    productActions.setCurrentProduct(products[0].productId)
                  );
                }
                resolve(true);
              }
            );
          } else {
            resolve(true);
          }
        })
        .catch(error => {
          reject(error);
        });
    })
    .catch(error => {
      reject(error);
    });
};

const doLogout = () => {
  return dispatch => {
    deleteCookieAuth();
    dispatch(authActions.cleanState());
    dispatch(customerActions.cleanState());
    dispatch(productActions.cleanState());
    dispatch(entityActions.cleanState());
    dispatch(modalActions.cleanState());
  };
};

const currentUser = () => {
  return (dispatch, getState) => {
    const { apiUrl } = getState().conf;
    const { userId } = getState().auth.auth;

    return request.get(`${apiUrl}/users/${userId}`).then(user => {
      return user;
    });
  };
};

export {
  createUser,
  doLogin,
  doLogout,
  currentUser,
  loadCurrentUserInformation
};
