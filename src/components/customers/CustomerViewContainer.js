import { connect } from "react-redux";
import CustomerView from "components/customers/CustomerView";
import {
  customerActions,
  productOperations,
  entitySelectors,
  productActions,
} from "ducks";

function mapStateToProps(state) {
  const customers = entitySelectors.getCollection(state, "customer");
  return {
    customers,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    setCurrentCustomer: customer => {
      dispatch(customerActions.setCurrentCustomer(customer.customerId));
      dispatch(
        productOperations.getProductsByCustomer(customer.customerId),
      ).then(products => {
        const currentProduct = products && products[0];
        dispatch(
          productActions.setCurrentProduct(
            currentProduct ? currentProduct.productId : null,
          ),
        );
        ownProps.history.push("/products");
      });
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomerView);
