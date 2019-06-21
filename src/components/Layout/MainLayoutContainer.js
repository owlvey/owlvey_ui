import { connect } from "react-redux";
import MainLayout from "components/Layout/MainLayout";
import {
  customerActions,
  productOperations,
  productActions,
  authOperations,
  entitySelectors,
  modalActions,
} from "ducks";

function mapStateToProps(state) {
  const customers = entitySelectors.getCollection(state, "customer");
  const currentCustomer = entitySelectors.getEntityById(
    state,
    "customer",
    state.customer.current,
  );
  const products = entitySelectors.getCollectionByIds(
    state,
    "product",
    currentCustomer && currentCustomer.products,
  );
  const currentProduct = entitySelectors.getEntityById(
    state,
    "product",
    state.product.current,
  );
  return {
    authUser: state.auth.user,
    customers,
    currentCustomer,
    products,
    currentProduct,
    isLoadingProduct: entitySelectors.getFetchingStatus(state, "product")
      .isLoading,
  };
}
function mapDispatchToProps(dispatch) {
  const setCurrentProduct = (dispatch, product) => {
    dispatch(
      productActions.setCurrentProduct(product ? product.productId : null),
    );
    // if (product)
    //   dispatch(stepOperations.getStepTramaByProduct(product.productId));
  };

  return {
    setCurrentCustomer: customer => {
      dispatch(customerActions.setCurrentCustomer(customer.customerId));
      dispatch(productActions.setCurrentProduct(null));
      dispatch(
        productOperations.getProductsByCustomer(customer.customerId),
      ).then(products => {
        setCurrentProduct(
          dispatch,
          products && products.length > 0 ? products[0] : null,
        );
      });
    },
    setCurrentProduct: product => setCurrentProduct(dispatch, product),
    doLogout: () => dispatch(authOperations.doLogout()),
    openCreateCustomerModal: () =>
      dispatch(modalActions.openModalFullScreen("createCustomer")),
    openCreateProductModal: () =>
      dispatch(modalActions.openModalFullScreen("createProduct")),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainLayout);
