import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import auth from "./auth";
import Login from "./contanier/Auth";
import Mobile from "./Layout/Mobile";
import Desktop from "./Layout/Desktop";
import ProtectedRoute from "./auth/protectedRoute";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Layout/default";

export default class App extends Component {
  render() {
    auth.checkUser();
    return (
      <Router>
        <>
          <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable
            pauseOnHover
          />
          <Switch>
            <ProtectedRoute path="/student" component={Mobile} />
            <ProtectedRoute path="/staff" component={Desktop} />
            <Route exact path="/login" component={Login} />
            <Route path="*" component={Home} />
          </Switch>
        </>
      </Router>
    );
  }
}
