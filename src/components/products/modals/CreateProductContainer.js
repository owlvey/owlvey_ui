import { connect } from "react-redux";
import CreateProduct from "components/products/modals/CreateProduct";
import { productOperations, entitySelectors, modalActions } from "ducks";

function mapStateToProps(state) {
  const currentCustomer = entitySelectors.getEntityById(
    state,
    "customer",
    state.customer.current,
  );
  return {
    currentCustomer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createProduct: product => dispatch(productOperations.addProduct(product)),
    closeModal: () => dispatch(modalActions.closeModal("createProduct")),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateProduct);
