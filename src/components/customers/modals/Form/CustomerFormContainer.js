import { connect } from "react-redux";
import CustomerFormView from "./CustomerFormView";
import { customerOperations, modalActions } from "ducks";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    submitCustomer: (customer, isEdit) => {
      if (isEdit) {
        return dispatch(customerOperations.editCustomer(customer));
      } else {
        return dispatch(customerOperations.addCustomer(customer));
      }
    },
    closeModal: () => dispatch(modalActions.closeModal("customerForm"))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerFormView);
