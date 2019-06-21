import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./ducks";
import thunk from "redux-thunk";

function createEnhancer() {
  const devToolsEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f;
  return compose(
    applyMiddleware(thunk),
    devToolsEnhancer,
  );
}

const owlveyStore = createStore(
  reducers,
  { auth: { auth: {}, user: {} } },
  createEnhancer(),
);

///TODO: REMVOE THIS LINE, ONLY DEV PURPOSE
window.store = owlveyStore;
////////
export default owlveyStore;
