import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Footer from '../DesktopFooter';
import SideBar from '../SideBar';
import Courses from '../../contanier/staff/Courses';
import Student from '../../contanier/staff/Student';
import Login from '../../contanier/Auth';

export default class Descktop extends Component {
  state = {
    login: true,
  }
  render() {
    const { login } = this.state;
    return (
      <BrowserRouter>
        {login ? (
          <>
            <SideBar />
            <Switch>
              <Route exact path={'/Courses'} component={Courses} />
              <Route exact path={'/Student'} component={Student} />
            </Switch>
            <Footer />
          </>
        ) : (
            <Switch>
              <Route exact path={'/login'} Component={Login} />
              <Route component={() => <Redirect to= '/login' />} />
            </Switch>
          )
        }
      </BrowserRouter>
    )
  }
}