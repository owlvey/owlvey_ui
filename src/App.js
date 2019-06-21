//import { STATE_LOGIN, STATE_SIGNUP } from "components/AuthForm";
import GAListener from "components/GAListener";
// import { MainLayout } from "components/Layout";
// import AuthPage from "pages/AuthPage";
import React from "react";
import componentQueries from "react-component-queries";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/main.scss";

import SignInContainer from "components/auth/signIn/SignInContainer";
import SignUpContainer from "components/auth/signUp/SignUpContainer";
import MainLayoutContainer from "./components/Layout/MainLayoutContainer";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <GAListener>
          <Switch>
            <Route exact path="/login" component={SignInContainer} />
            <Route exact path="/signup" component={SignUpContainer} />
            <Route path="/" component={MainLayoutContainer} />
          </Switch>
        </GAListener>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: "xs" };
  }

  if (576 < width && width < 767) {
    return { breakpoint: "sm" };
  }

  if (768 < width && width < 991) {
    return { breakpoint: "md" };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: "lg" };
  }

  if (width > 1200) {
    return { breakpoint: "xl" };
  }

  return { breakpoint: "xs" };
};

export default componentQueries(query)(App);
