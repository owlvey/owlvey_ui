import React, { useEffect } from "react";

function RemoveProductView({
  product,
  updateModalOptions,
  deleteProduct,
  closeModal
}) {
  const handleDeleteProduct = () => {
    updateModalOptions({ extraClassNames: "submitting-form" });
    deleteProduct(product.productId)
      .then(() => {
        closeModal();
      })
      .catch(() => {
        closeModal();
      });
  };
  useEffect(() => {
    updateModalOptions({
      title: "Remove Product",
      buttonOkText: "Remove",
      okActionClick: handleDeleteProduct
    });
  }, []);
  return (
    <div className="form-group">
      <span>
        Are you sure you want to Remove the product <b>{product.name}</b>?
      </span>
    </div>
  );
}

export default RemoveProductView;
