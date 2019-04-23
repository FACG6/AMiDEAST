import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Footer from "../DesktopFooter";
import Sidebar from "../../common/Sidebar";
import Courses from "../../contanier/staff/Courses";
import Student from "../../contanier/staff/Student";
import Login from "../../contanier/Auth";
import "./index.css";

export default class Descktop extends Component {
  state = {
    login: true
  };
  render() {
    const { login } = this.state;
    return (
      <BrowserRouter className="desktop-container">
        {login ? (
          <div className="contanier">
            <Sidebar />
            <Switch>
              <Route exact path={"/courses"} component={Courses} />
              <Route exact path={"/Student"} component={Student} />
            </Switch>
            <Footer />
          </div>
        ) : null
        // <Redirect to= '/login' />
        }
      </BrowserRouter>
    );
  }
}
