import React from "react";
import bn from "utils/bemnames";
import classNames from "classnames";
import { MdClearAll } from "react-icons/md";
import SearchInput from "shared/SearchInput";
import Dropdown from "shared/Dropdown";
import UserNotification from "components/Layout/Header/UserNotification";
import UserOptions from "components/Layout/Header/UserOptions";

import { notificationsData } from "demos/header";

const bem = bn.create("header");

class Header extends React.Component {
  state = {
    isOpenNotificationPopover: false,
    isNotificationConfirmed: false,
    isOpenUserCardPopover: false,
  };
  customerModalEvents = {};

  toggleNotificationPopover = () => {
    this.setState({
      isOpenNotificationPopover: !this.state.isOpenNotificationPopover,
    });

    if (!this.state.isNotificationConfirmed) {
      this.setState({ isNotificationConfirmed: true });
    }
  };

  toggleUserCardPopover = () => {
    this.setState({
      isOpenUserCardPopover: !this.state.isOpenUserCardPopover,
    });
  };

  handleSidebarControlButton = event => {
    event.preventDefault();
    event.stopPropagation();

    document.querySelector(".cr-sidebar").classList.toggle("cr-sidebar--open");
  };

  handleOpenCustomerModal = () => {
    const { openCreateCustomerModal } = this.props;
    openCreateCustomerModal();
  };

  handleOpenProductModal = () => {
    const { openCreateProductModal } = this.props;
    openCreateProductModal();
  };

  handleChangeCustomer = customer => {
    this.props.onCustomerChange(customer);
  };

  handleChangeProduct = product => {
    this.props.onProductChange(product);
  };

  render() {
    const { isNotificationConfirmed, isOpenUserCardPopover } = this.state;
    const {
      authUser,
      customers,
      currentCustomer,
      products,
      currentProduct,
      isLoadingProduct,
    } = this.props;
    const navBarClassName = classNames(
      bem.b("bg-white"),
      "navbar navbar-expand navbar-light",
    );
    return (
      <>
        <nav className={navBarClassName}>
          <ul className="mr-2 navbar-nav">
            <li className="nav-item">
              <button
                onClick={this.handleSidebarControlButton}
                className="btn btn-outline-dark"
              >
                <MdClearAll size={25} />
              </button>
            </li>
            <li className="nav-item">
              <Dropdown
                data={customers}
                displayMember={"name"}
                value={currentCustomer}
                defaultValue={currentCustomer}
                showAvatarPerItem={true}
                displayAvatarMember={"avatar"}
                addActionText={"New Customer"}
                onAddActionClick={this.handleOpenCustomerModal}
                onChange={this.handleChangeCustomer}
              />
            </li>
            <li className="nav-item">
              <Dropdown
                data={products}
                displayMember={"name"}
                value={currentProduct}
                defaultValue={currentProduct}
                showAvatarPerItem={true}
                displayAvatarMember={"avatar"}
                addActionText={"New Product"}
                onAddActionClick={this.handleOpenProductModal}
                onChange={this.handleChangeProduct}
                isLoading={isLoadingProduct}
              />
            </li>
          </ul>

          <ul className={classNames(bem.e("nav-right"), "navbar-nav")}>
            <li className="nav-item d-inline-flex">
              <ul className="navbar-nav">
                <SearchInput />
              </ul>
              <UserNotification
                isNotificationConfirmed={isNotificationConfirmed}
                toggleNotificationPopover={this.toggleNotificationPopover}
                isOpenNotificationPopover={this.state.isOpenNotificationPopover}
                notificationsData={notificationsData}
              />
            </li>

            <li className="nav-item">
              <UserOptions
                toggleUserCardPopover={this.toggleUserCardPopover}
                onSignOutClick={this.props.onSignOutClick}
                isOpenUserCardPopover={isOpenUserCardPopover}
                user={authUser}
              />
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Header;
