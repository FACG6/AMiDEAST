import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Footer from '../footerDescktop/FooterDescktop';
import Sidenav from '../sidebar/sidebar';
import Courses from '../../contanier/staff/Courses/index';
import Student from '../../contanier/staff/Student/index';
import Login from '../../contanier/auth/login';

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
            <Sidenav />
            <Switch>
              <Route exact path={'/courses'} component={() => <Courses />} />
              <Route exact path={'/Student'} component={() => <Student />} />
            </Switch>
            <Footer />
          </>
        ) : (
            <Switch>
              <Route exact path={'/login'} Component={() => <Login />} />
              <Route component={() => <Redirect to='/login' />} />
            </Switch>
          )
        }
      </BrowserRouter>
    )
  }
}
