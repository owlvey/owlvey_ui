import React, { useEffect, useState } from "react";

function RemoveCustomerView({
  customer,
  updateModalOptions,
  deleteCustomer,
  closeModal
}) {
  const [messageError, setMessageError] = useState(null);
  const handleDeleteCustomer = () => {
    updateModalOptions({ extraClassNames: "submitting-form" });
    deleteCustomer(customer.customerId)
      .then(() => {
        closeModal();
      })
      .catch(error => {
        setMessageError(error.message);
        updateModalOptions({ extraClassNames: "" });
      });
  };
  useEffect(() => {
    updateModalOptions({
      title: "Remove Customer",
      buttonOkText: "Remove",
      okActionClick: handleDeleteCustomer
    });
  }, []);
  return (
    <React.Fragment>
      <div className="form-group">
        <span>
          Are you sure you want to Remove the customer <b>{customer.name}</b>?
        </span>
      </div>
      {messageError && (
        <small className="form-text text-danger">{messageError}</small>
      )}
    </React.Fragment>
  );
}

export default RemoveCustomerView;
