import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Footer from "./../MobileFooter";
import Courses from "../../contanier/student/Coures";
import Apply from "../../contanier/student/Apply";
import Profile from "../../contanier/student/Profile";
import StudentCourses from "../../contanier/student/StudentCourses";
import auth from "./../../auth";
import SideNav from '../SideNav'

export default class Mobile extends Component {
  state = {
    level: "",
    courseId: null
  };

  componentDidMount() {
    const { level } = auth.isAuthenticated();
    this.setState({ level });
  }

  render() {
    const { id } = auth.isAuthenticated();
    const { role } = auth.isAuthenticated();
    if (role === "staff") this.props.history.push("/staff");
    return (
      <>
        <SideNav 
          history={this.props.history}
        />
        <Switch>
          <Route
            exact
            path={"/student/courses"}
            component={props => (
              <Courses
                {...props}
                id={id}
                level={this.state.level}
                history={this.props.history}
              />
            )}
          />
          <Route
            exact
            path={"/student/mycourses"}
            component={() => <StudentCourses id={id} />}
          />
          <Route
            exact
            path={"/student/apply"}
            component={() => <Apply id={id} courseId={this.state.courseId} />}
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
