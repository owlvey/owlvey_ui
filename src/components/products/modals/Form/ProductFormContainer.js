import { connect } from "react-redux";
import ProductForm from "./ProductForm";
import {
  productOperations,
  entitySelectors,
  modalActions,
  alertActions
} from "ducks";

function mapStateToProps(state) {
  const currentCustomer = entitySelectors.getEntityById(
    state,
    "customer",
    state.customer.current
  );
  return {
    currentCustomer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitProduct: (product, isEdit) => {
      if (isEdit) {
        return dispatch(productOperations.editProduct(product));
      } else {
        return dispatch(productOperations.addProduct(product));
      }
    },
    showAlert: message => dispatch(alertActions.openAlert(message)),
    closeModal: () => dispatch(modalActions.closeModal("productForm"))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductForm);
