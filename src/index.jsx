import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import joinReducers from "./reducers/index";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  joinReducers,
  composeEnhancer(applyMiddleware(thunk)),

);
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
