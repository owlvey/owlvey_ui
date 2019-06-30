import React, { useEffect } from "react";

function RemoveCustomerView({
  customer,
  updateModalOptions,
  deleteCustomer,
  closeModal
}) {
  const handleDeleteCustomer = () => {
    updateModalOptions({ extraClassNames: "submitting-form" });
    deleteCustomer(customer.customerId)
      .then(() => {
        closeModal();
      })
      .catch(() => {
        closeModal();
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
    <div className="form-group">
      <span>
        Are you sure you want to Remove the customer <b>{customer.name}</b>?
      </span>
    </div>
  );
}

export default RemoveCustomerView;
