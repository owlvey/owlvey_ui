import { combineReducers } from "redux";
import authReducer from "components/auth/ducks";
import appConfReducer from "components/configurations/ducks/reducer";
import customerReducer from "components/customers/ducks/reducer";
import productReducer from "components/products/ducks/reducer";
import entityReducer from "components/Entities";
import modalReducer from "shared/Modal/ducks/reducer";

import {
  entityActions,
  entityTypes,
  entitySelectors,
} from "components/Entities";

import {
  authSelectors,
  authOperations,
  authActions,
  authTypes,
} from "components/auth/ducks";

import { appConfActions, appConfTypes } from "components/configurations/ducks";

import {
  customerOperations,
  customerTypes,
  customerActions,
} from "components/customers/ducks";

import { membershipOperations } from "components/membership/ducks";

import { modalActions } from "shared/Modal/ducks";

import { benchmarkOperations } from "components/benchmark/ducks";

import {
  productOperations,
  productTypes,
  productActions,
} from "components/products/ducks";

import { processOperations } from "components/process/ducks";

//-------EXPORT BLOCK----------
export { authSelectors, appConfActions, entitySelectors };
export {
  authOperations,
  customerOperations,
  productOperations,
  processOperations,
  benchmarkOperations,
  membershipOperations,
};
export {
  entityActions,
  authActions,
  customerActions,
  productActions,
  modalActions,
};
export { entityTypes, authTypes, appConfTypes, customerTypes, productTypes };

export default combineReducers({
  auth: authReducer,
  conf: appConfReducer,
  customer: customerReducer,
  product: productReducer,
  entity: entityReducer,
  modalContainer: modalReducer,
});
