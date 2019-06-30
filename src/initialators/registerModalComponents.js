import { loadModalComponents } from "shared/Modal/modalComponents.js";
import CreateCustomerContainer from "components/customers/modals/Form/CustomerFormContainer";
import RemoveCustomerContainer from "components/customers/modals/Remove/RemoveCustomerContainer";
import ProductFormContainer from "components/products/modals/Form/ProductFormContainer";
import RemoveProductContainer from "components/products/modals/Remove/RemoveProductContainer";

const modalComponents = {
  customerForm: { component: CreateCustomerContainer },
  productForm: { component: ProductFormContainer },
  removeCustomer: { component: RemoveCustomerContainer },
  removeProduct: { component: RemoveProductContainer }
};

loadModalComponents(modalComponents);
