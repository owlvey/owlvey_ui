import { Content } from "components/Layout";
import Header from "components/Layout/Header/Header";
import Footer from "components/Layout/Footer/Footer";
import Sidebar from "components/Layout/SideBar/Sidebar";
import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { MdImportantDevices, MdLoyalty } from "react-icons/md";
import NotificationSystem from "react-notification-system";
import { NOTIFICATION_SYSTEM_STYLE } from "utils/constants";

import AccountContainer from "components/auth/AccountContainer";
import CustomerViewContainer from "components/customers/CustomerViewContainer";
import ProductContainer from "components/products/ProductContainer";
import ProcessContainer from "components/process/ProcessContainer";
import BenchmarkContainer from "components/benchmark/BenchmarkContainer";
import FeatureBenContainer from "components/benchmark/feature/FeatureBenContainer";
import ScenarioBenContainer from "components/benchmark/scenario/ScenarioBenContainer";
import StepBenContainer from "components/benchmark/step/StepBenContainer";
import CaseBenContainer from "components/benchmark/case/CaseBenContainer";
import MembershipContainer from "components/membership/MembershipContainer";

import DashboardPage from "shared/pages/DashboardPage";
import AuthModalPage from "shared/pages/AuthModalPage";
import ButtonPage from "shared/pages/ButtonPage";
import CardPage from "shared/pages/CardPage";
import WidgetPage from "shared/pages/WidgetPage";
import TypographyPage from "shared/pages/TypographyPage";
import AlertPage from "shared/pages/AlertPage";
import TablePage from "shared/pages/TablePage";
import BadgePage from "shared/pages/BadgePage";
import ButtonGroupPage from "shared/pages/ButtonGroupPage";
import DropdownPage from "shared/pages/DropdownPage";
import ProgressPage from "shared/pages/ProgressPage";
import ModalPage from "shared/pages/ModalPage";
import FormPage from "shared/pages/FormPage";
import InputGroupPage from "shared/pages/InputGroupPage";
import ChartPage from "shared/pages/ChartPage";
import AuthPage from "shared/pages/AuthPage";
import NotFoundPage from "shared/pages/NotFoundPage";
import Styleguide from "shared/styleguide/Styleguide";

import { authSelectors } from "ducks";
import ModalContainer from "shared/Modal/ModalContainer";

class MainLayout extends React.Component {
  static isSidebarOpen() {
    return document
      .querySelector(".cr-sidebar")
      .classList.contains("cr-sidebar--open");
  }

  componentWillReceiveProps({ breakpoint }) {
    if (breakpoint !== this.props.breakpoint) {
      this.checkBreakpoint(breakpoint);
    }
  }

  componentDidMount() {
    const { customers, setCurrentCustomer } = this.props;
    if (customers && customers.length > 0) {
      setCurrentCustomer(customers[0]);
    }

    this.checkBreakpoint(this.props.breakpoint);

    setTimeout(() => {
      if (!this.notificationSystem) {
        return;
      }

      this.notificationSystem.addNotification({
        title: <MdImportantDevices />,
        message: "Welome to Owlvey Admin!",
        level: "info"
      });
    }, 1500);

    setTimeout(() => {
      if (!this.notificationSystem) {
        return;
      }

      this.notificationSystem.addNotification({
        title: <MdLoyalty />,
        message:
          "Owlvey is carefully designed app powered by React and Bootstrap4!",
        level: "info"
      });
    }, 2500);
  }

  // close sidebar when
  handleContentClick = event => {
    // close sidebar if sidebar is open and screen size is less than `md`
    if (
      MainLayout.isSidebarOpen() &&
      (this.props.breakpoint === "xs" ||
        this.props.breakpoint === "sm" ||
        this.props.breakpoint === "md")
    ) {
      this.openSidebar("close");
    }
  };

  checkBreakpoint(breakpoint) {
    switch (breakpoint) {
      case "xs":
      case "sm":
      case "md":
        return this.openSidebar("close");

      case "lg":
      case "xl":
      default:
        return this.openSidebar("open");
    }
  }

  openSidebar(openOrClose) {
    if (!authSelectors.isAuthValid()) return;
    if (openOrClose === "open") {
      return document
        .querySelector(".cr-sidebar")
        .classList.add("cr-sidebar--open");
    }
    document.querySelector(".cr-sidebar").classList.remove("cr-sidebar--open");
  }

  handleSignOut = () => {
    this.props.doLogout();
    this.props.history.push("/login");
  };

  render() {
    if (!authSelectors.isAuthValid()) return <Redirect to="/login" />;
    const {
      authUser,
      customers,
      currentCustomer,
      setCurrentCustomer,
      products,
      currentProduct,
      setCurrentProduct,
      isLoadingProduct,
      openCreateCustomerModal,
      openCreateProductModal
    } = this.props;
    return (
      <main className="cr-app bg-light">
        <Sidebar />
        <Content className="container-fluid" onClick={this.handleContentClick}>
          <Header
            onSignOutClick={this.handleSignOut}
            authUser={authUser}
            customers={customers}
            currentCustomer={currentCustomer}
            onCustomerChange={setCurrentCustomer}
            products={products}
            currentProduct={currentProduct}
            onProductChange={setCurrentProduct}
            isLoadingProduct={isLoadingProduct}
            openCreateCustomerModal={openCreateCustomerModal}
            openCreateProductModal={openCreateProductModal}
          />
          <Switch>
            <Route exact path="/" component={DashboardPage} />
            <Route exact path="/account" component={AccountContainer} />
            <Route exact path="/customers" component={CustomerViewContainer} />
            <Route exact path="/products" component={ProductContainer} />
            <Route path="/process" component={ProcessContainer} />
            <Route exact path="/benchmark" component={BenchmarkContainer} />
            <Route
              exact
              path="/benchmark/:versionBenId/feature"
              component={FeatureBenContainer}
            />
            <Route
              exact
              path="/benchmark/:featureBenId/scenario"
              component={ScenarioBenContainer}
            />
            <Route
              exact
              path="/benchmark/:scenarioBenId/step"
              component={StepBenContainer}
            />
            <Route
              exact
              path="/benchmark/:stepBenId/case"
              component={CaseBenContainer}
            />
            <Route exact path="/membership" component={MembershipContainer} />

            <Route exact path="/login-modal" component={AuthModalPage} />
            <Route exact path="/buttons" component={ButtonPage} />
            <Route exact path="/cards" component={CardPage} />
            <Route exact path="/widgets" component={WidgetPage} />
            <Route exact path="/typography" component={TypographyPage} />
            <Route exact path="/alerts" component={AlertPage} />
            <Route exact path="/tables" component={TablePage} />
            <Route exact path="/badges" component={BadgePage} />
            <Route exact path="/button-groups" component={ButtonGroupPage} />
            <Route exact path="/dropdowns" component={DropdownPage} />
            <Route exact path="/progress" component={ProgressPage} />
            <Route exact path="/modals" component={ModalPage} />
            <Route exact path="/forms" component={FormPage} />
            <Route exact path="/input-groups" component={InputGroupPage} />
            <Route exact path="/charts" component={ChartPage} />
            <Route exact path="/register" component={AuthPage} />
            <Route exact path="/styleguide/:name" component={Styleguide} />
            <Route component={NotFoundPage} />
          </Switch>
          <ModalContainer />
          <Footer />
        </Content>

        <NotificationSystem
          dismissible={false}
          ref={notificationSystem =>
            (this.notificationSystem = notificationSystem)
          }
          style={NOTIFICATION_SYSTEM_STYLE}
        />
      </main>
    );
  }
}

export default MainLayout;
