import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Footer from "../DesktopFooter";
import SideBar from "../SideBar";
import Courses from "../../contanier/staff/Courses";
import Student from "../../contanier/staff/Student";
import auth from "./../../auth";

export default class Desktop extends Component {
  state = {};
  render() {
    const { role } = auth.isAuthenticated();
    if (role === "student") this.props.history.push("/student");
    return (
      <>
        <SideBar />
        <Route exact path={"/staff/courses"} component={Courses} />
        <Route exact path={"/staff/student"} component={Student} />
        <Footer />
      </>
    );
  }
}
