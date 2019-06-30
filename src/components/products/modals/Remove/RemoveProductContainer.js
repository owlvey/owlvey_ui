import { connect } from "react-redux";
import RemoveProductView from "./RemoveProductView";
import { productOperations, modalActions } from "ducks";

function mapStateToProps(_, ownProps) {
  const { customer } = ownProps;
  return { customer };
}

function mapDispatchToProps(dispatch) {
  return {
    updateModalOptions: options =>
      dispatch(modalActions.updateModalOptions("removeProduct", options)),
    deleteProduct: productId =>
      dispatch(productOperations.deleteProduct(productId)),
    closeModal: () => dispatch(modalActions.closeModal("removeProduct"))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RemoveProductView);
