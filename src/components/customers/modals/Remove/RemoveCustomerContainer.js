import { connect } from "react-redux";
import RemoveCustomerView from "./RemoveCustomerView";
import { customerOperations, modalActions } from "ducks";

function mapStateToProps(_, ownProps) {
  const { customer } = ownProps;
  return { customer };
}

function mapDispatchToProps(dispatch) {
  return {
    updateModalOptions: options =>
      dispatch(modalActions.updateModalOptions("removeCustomer", options)),
    deleteCustomer: customerId =>
      dispatch(customerOperations.deleteCustomer(customerId)),
    closeModal: () => dispatch(modalActions.closeModal("removeCustomer"))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RemoveCustomerView);
