import request from "helper/request";
import { setCookieAuth, deleteCookieAuth } from "./selectors";
import { recieveAuth, recieveAuthUser, logoutAuth } from "./actions";
import {
  entityActions,
  customerOperations,
  customerActions,
  productActions,
  productOperations,
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
  dispatch(recieveAuth(auth));
  dispatch(currentUser())
    .then(user => {
      dispatch(recieveAuthUser(user));
      dispatch(listKeys());
      dispatch(customerOperations.getCustomers())
        .then(customers => {
          if (customers && customers.length > 0) {
            const customerId = customers[0].customerId;
            dispatch(customerActions.setCurrentCustomer(customerId));
            dispatch(productOperations.getProductsByCustomer(customerId)).then(
              products => {
                if (products && products.length > 0) {
                  dispatch(
                    productActions.setCurrentProduct(products[0].productId),
                  );
                }
                resolve(true);
              },
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
    dispatch(logoutAuth());
    dispatch(customerActions.clearStore());
    dispatch(productActions.clearStore());
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

const addKey = () => {
  return (dispatch, getState) => {
    const { apiUrl } = getState().conf;
    return request.post(`${apiUrl}/keys`).then(keyAdded => {
      dispatch(entityActions.addCollection("key", [keyAdded]));
      return keyAdded;
    });
  };
};

const listKeys = () => {
  return (dispatch, getState) => {
    const { apiUrl } = getState().conf;
    dispatch(entityActions.getCollectionStart("key"));
    return request
      .get(`${apiUrl}/keys`)
      .then(keys => {
        dispatch(entityActions.addCollection("key", keys));
        dispatch(entityActions.getColletionSuccess("key"));
        return keys;
      })
      .catch(error => {
        dispatch(entityActions.getCollectionError("key", error.message));
        throw error;
      });
  };
};

export {
  createUser,
  doLogin,
  doLogout,
  currentUser,
  loadCurrentUserInformation,
  addKey,
  listKeys,
};
