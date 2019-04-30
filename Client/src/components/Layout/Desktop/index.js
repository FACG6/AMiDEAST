import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Footer from '../DesktopFooter';
import SideBar from '../SideBar';
import Courses from '../../contanier/staff/Courses';
import Student from '../../contanier/staff/Student';

export default class Descktop extends Component {
  state = {
  }
  render() {
    const { login } = this.state;
    return (
      <BrowserRouter className='desktop-container'>
            <SideBar />
            <Switch>
              <Route exact path={'/staff/courses'} component={Courses} />
              <Route exact path={'/staff/student'} component={Student} />
            </Switch>
            <Footer />
      </BrowserRouter>
    )
  }
}
