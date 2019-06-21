import { connect } from "react-redux";
import CreateCustomer from "components/customers/modals/CreateCustomer";
import { customerOperations, modalActions } from "ducks";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    createCustomer: customer =>
      dispatch(customerOperations.addCustomer(customer)),
    closeModal: () => dispatch(modalActions.closeModal("createCustomer")),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateCustomer);
