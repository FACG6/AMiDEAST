import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

import Header from "./../Header";
import Footer from "./../MobileFooter";
import Courses from "../../contanier/student/Coures";
import Apply from "../../contanier/student/Apply";
import Profile from "../../contanier/student/Profile";
import SideBar from "../SideBar";
import StudentCourses from "../../contanier/student/StudentCourses";
import auth from "./../../auth";

export default class Mobile extends Component {
  state = {
    menuOpen: false,
    courseId: null
  };
  handleLinkClick = () => {
    this.setState({ menuOpen: false });
  };
  handleMenuClick = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {
    const { id, level } = auth.isAuthenticated();
    const { menuOpen } = this.state;

    const { handleMenuClick, handleLinkClick } = this;
    const { role } = auth.isAuthenticated();
    if (role === "staff") this.props.history.push("/staff");
    return (
      <>
        <Header handleMenuClick={handleMenuClick} menuOpen={menuOpen} />
        <SideBar
          handleLinkClick={handleLinkClick}
          menuOpen={menuOpen}
          history={this.props.history}
        />
        <Switch>
          <Route
            exact
            path={"/student/courses"}
            component={props => <Courses {...props} id={id} level={level} />}
          />
          <Route
            exact
            path={"/student/mycourses"}
            component={() => <StudentCourses id={id} />}
          />
          <Route
            exact
            path={"/student/profile"}
            component={() => <Profile id={id} />}
          />
          <Route component={() => <Profile id={id} />} />
        </Switch>
        <Footer />
      </>
    );
  }
}
