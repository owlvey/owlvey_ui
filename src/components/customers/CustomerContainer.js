import React from "react";
import { connect } from "react-redux";
import CustomerView from "components/customers/CustomerView";
import {
  customerActions,
  productOperations,
  entitySelectors,
  productActions,
  modalActions
} from "ducks";
import EmptyPage from "shared/EmptyPage";
import { FaMedapps } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";

function CustomerContainer({
  customers,
  setCurrentCustomer,
  openCreateCustomerModal,
  openEditCustomerModal,
  openRemoveCustomerModal
}) {
  if (customers && customers.length > 0) {
    return (
      <CustomerView
        customers={customers}
        setCurrentCustomer={setCurrentCustomer}
        openEditCustomerModal={openEditCustomerModal}
        openRemoveCustomerModal={openRemoveCustomerModal}
      />
    );
  } else {
    return (
      <EmptyPage
        icon={FaMedapps}
        message="You haven't any Customer yet!"
        buttonActions={
          <button
            className="btn btn-primary btn-lg"
            onClick={openCreateCustomerModal}
          >
            <TiPlus /> Add Customer
          </button>
        }
      />
    );
  }
}

function mapStateToProps(state) {
  const customers = entitySelectors.getCollection(state, "customer");
  return {
    customers
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    openCreateCustomerModal: () =>
      dispatch(
        modalActions.openModalFullScreen("customerForm", { isEditMode: false })
      ),
    openEditCustomerModal: customer =>
      dispatch(
        modalActions.openModalFullScreen("customerForm", {
          isEditMode: true,
          customer
        })
      ),
    openRemoveCustomerModal: customer =>
      dispatch(modalActions.openModal("removeCustomer", { customer })),
    setCurrentCustomer: customer => {
      dispatch(customerActions.setCurrentCustomer(customer.customerId));
      dispatch(
        productOperations.getProductsByCustomer(customer.customerId)
      ).then(products => {
        const currentProduct = products && products[0];
        dispatch(
          productActions.setCurrentProduct(
            currentProduct ? currentProduct.productId : null
          )
        );
        ownProps.history.push("/products");
      });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerContainer);
