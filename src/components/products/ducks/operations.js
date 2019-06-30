import request from "helper/request";
import { entityActions, entitySelectors } from "ducks";

const getProductsByCustomer = customerId => {
  return (dispatch, getState) => {
    const { apiUrl } = getState().conf;
    const customer = getState().entity.customer[customerId];
    if (customer && customer.products && customer.products.length > 0) {
      const products = entitySelectors.getCollectionByIds(
        getState(),
        "product",
        customer.products
      );
      return new Promise(resolve => {
        resolve(products);
      });
    }
    dispatch(entityActions.getCollectionStart("product"));
    return request
      .get(`${apiUrl}/products?customer_id=${customerId}`)
      .then(products => {
        dispatch(
          entityActions.addCollection("product", products, {
            parentCollectionName: "customer",
            parentId: customerId
          })
        );
        dispatch(entityActions.getColletionSuccess("product"));
        return products;
      })
      .catch(error => {
        dispatch(entityActions.getCollectionError("product", error.message));
        throw error;
      });
  };
};

const addProduct = product => {
  return (dispatch, getState) => {
    const { apiUrl } = getState().conf;
    return request.post(`${apiUrl}/products`, product).then(productAdded => {
      dispatch(entityActions.addCollection("product", [productAdded]));
      let customer = { ...getState().entity["customer"][product.customer_id] };
      customer.products = [...customer.products, productAdded.productId];
      dispatch(
        entityActions.updateEntity("customer", customer, product.customer_id)
      );
      return productAdded;
    });
  };
};

const editProduct = product => {
  return (dispatch, getState) => {
    const { apiUrl } = getState().conf;
    return request
      .put(`${apiUrl}/products/${product.productId}`, {
        name: product.name,
        avatar: product.avatar
      })
      .then(editedProduct => {
        let productRd = {
          ...getState().entity["product"][product.productId],
          name: product.name,
          avatar: product.avatar
        };
        dispatch(
          entityActions.updateEntity("product", productRd, product.productId)
        );
        return editedProduct;
      });
  };
};

const deleteProduct = productId => {
  return (dispatch, getState) => {
    const { apiUrl } = getState().conf;
    return request
      .delete(`${apiUrl}/products/${productId}`)
      .then(productDeleted => {
        dispatch(entityActions.removeEntity("product", productId));
        return productDeleted;
      });
  };
};

export { getProductsByCustomer, addProduct, editProduct, deleteProduct };
