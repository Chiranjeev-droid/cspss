import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import * as firebase from "firebase";
import registerServiceWorker from "./registerServiceWorker";
const store = configureStore();
var config = {
  apiKey: "AIzaSyANCrtCEM_RI0uGP40dHO5dGMIqjRYgtos",
  authDomain: "csps-976f8.firebaseapp.com",
  databaseURL: "https://csps-976f8-default-rtdb.firebaseio.com",
  projectId: "csps-976f8",
  storageBucket: "csps-976f8.appspot.com",
  messagingSenderId: "315505315826",
  appId: "1:315505315826:web:b5f2d1ecf814f23f3ae56b",
};
firebase.initializeApp(config);
ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
