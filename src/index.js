import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import owlveyStore from "./owlveyStore";
import { configurationActions } from "ducks";
import externalizeComponents from "initialators/externalizeComponents";
import "initialators/registerModalComponents";
import loadCurrentAuth from "initialators/loadCurrentAuth";
import "bootstrap";
import "./utils/jquery.images-compare.min";

const rootEl = document.getElementById("root");
window.store = owlveyStore;
const renderApp = AppComponent => {
  render(
    <Provider store={owlveyStore}>
      <AppComponent />
    </Provider>,
    rootEl
  );
};

externalizeComponents(); //TODO: make sure to execute only dev  mode
owlveyStore.dispatch(
  configurationActions.recieveAppConfApiUrl(`${process.env.API_URL}`)
);
loadCurrentAuth(owlveyStore).then(() => {
  renderApp(App);
});

if (module.hot) {
  module.hot.accept("./App", () => {
    const nextApp = require("./App").default;
    renderApp(nextApp);
  });
}
