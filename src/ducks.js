import { combineReducers } from "redux";
import authReducer from "components/auth/ducks";
import configurationReducer from "components/configurations/ducks/reducer";
import customerReducer from "components/customers/ducks/reducer";
import productReducer from "components/products/ducks/reducer";
import entityReducer from "components/Entities";
import modalReducer from "shared/Modal/ducks/reducer";
import alertReducer from "shared/Alert/ducks/reducer";

import {
  entityActions,
  entityTypes,
  entitySelectors
} from "components/Entities";

import {
  authSelectors,
  authOperations,
  authActions,
  authTypes
} from "components/auth/ducks";

import {
  configurationActions,
  configurationTypes
} from "components/configurations/ducks";

import {
  customerOperations,
  customerTypes,
  customerActions
} from "components/customers/ducks";

import { membershipOperations } from "components/membership/ducks";
import { keyOperations } from "components/Keys/ducks";
import { modalActions } from "shared/Modal/ducks";
import { alertActions } from "shared/Alert/ducks";
window.alertActions = alertActions;
import { benchmarkOperations } from "components/benchmark/ducks";

import {
  productOperations,
  productTypes,
  productActions
} from "components/products/ducks";

import { processOperations } from "components/process/ducks";

//-------EXPORT BLOCK----------
export { authSelectors, configurationActions, entitySelectors };
export {
  authOperations,
  customerOperations,
  productOperations,
  processOperations,
  benchmarkOperations,
  membershipOperations,
  keyOperations
};
export {
  entityActions,
  authActions,
  customerActions,
  productActions,
  modalActions,
  alertActions
};
export {
  entityTypes,
  authTypes,
  configurationTypes,
  customerTypes,
  productTypes
};

export default combineReducers({
  auth: authReducer,
  conf: configurationReducer,
  customer: customerReducer,
  product: productReducer,
  entity: entityReducer,
  modalContainer: modalReducer,
  alertContainer: alertReducer
});
