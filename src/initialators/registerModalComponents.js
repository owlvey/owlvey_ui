import { loadModalComponents } from "shared/Modal/modalComponents.js";
import CreateCustomerContainer from "components/customers/modals/CreateCustomerContainer";
import CreateProductContainer from "components/products/modals/CreateProductContainer";

const modalComponents = {
  createCustomer: { component: CreateCustomerContainer },
  createProduct: { component: CreateProductContainer },
};

loadModalComponents(modalComponents);
