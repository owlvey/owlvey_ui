import React, { useEffect } from "react";

function RemoveCustomerView({ customer, updateModalOptions, deleteCustomer }) {
  useEffect(() => {
    updateModalOptions({
      title: "Remove Customer",
      buttonOkText: "Remove",
      okActionClick: () => {
        deleteCustomer(customer.customerId);
      }
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
