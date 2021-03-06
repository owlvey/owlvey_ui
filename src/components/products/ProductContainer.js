import React from "react";
import { connect } from "react-redux";
import ProductView from "components/products/ProductView";
import { entitySelectors, productActions, modalActions } from "ducks";
import EmptyPage from "shared/EmptyPage";
import { FaMedapps } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";

function ProductContainer({
  currentCustomer,
  products,
  openCreateProductModal,
  openEditProductModal,
  openRemoveProductModal,
  setCurrentProduct,
  history
}) {
  if (!currentCustomer) {
    history.push("/customers");
    return null;
  }
  if (products && products.length > 0) {
    return (
      <ProductView
        products={products}
        setCurrentProduct={setCurrentProduct}
        openEditProductModal={openEditProductModal}
        openRemoveProductModal={openRemoveProductModal}
      />
    );
  } else {
    return (
      <EmptyPage
        icon={FaMedapps}
        message="You haven't added any products yet!"
        buttonActions={
          <button
            className="btn btn-primary btn-lg"
            onClick={openCreateProductModal}
          >
            <TiPlus /> Add Product
          </button>
        }
      />
    );
  }
}

function mapStateToProps(state) {
  const currentCustomer = entitySelectors.getEntityById(
    state,
    "customer",
    state.customer.current
  );
  const products =
    currentCustomer &&
    entitySelectors.getCollectionByIds(
      state,
      "product",
      currentCustomer.products
    );
  return {
    currentCustomer,
    products
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    setCurrentProduct: product => {
      dispatch(productActions.setCurrentProduct(product.productId));
      ownProps.history.push("/process");
    },
    openCreateProductModal: () =>
      dispatch(
        modalActions.openModalFullScreen("productForm", { isEditMode: false })
      ),
    openEditProductModal: product =>
      dispatch(
        modalActions.openModalFullScreen("productForm", {
          isEditMode: true,
          product
        })
      ),
    openRemoveProductModal: product =>
      dispatch(modalActions.openModal("removeProduct", { product }))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductContainer);
