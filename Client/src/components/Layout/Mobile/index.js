import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from './../Header';
import Footer from './../MobileFooter';
import Courses from '../../contanier/student/Coures';
import Apply from '../../contanier/student/Apply';
import Profile from '../../contanier/student/Profile';
import Login from '../../contanier/Auth';

export default class Mobile extends Component {
  state = {
    login: true,
  }
  render() {
    const { login } = this.state;
    return (
      <BrowserRouter>
        {login ? (
          <>
            <Header />
            <Switch>
              <Route exact path={'/courses'} component={Courses} />
              <Route exact path={'/apply'} component={Apply} />
              <Route exact path={'/profile'} component={Profile} />
              <Route component={() => <div>404</div>} />
            </Switch>
            <Footer />
          </>
        ) : (
            <>
              <Switch>
                <Route exact path={'/login'} component={() => <Login />} />
                <Route component={() => <Redirect to="/login" />} />
              </Switch>
            </>
          )}
      </BrowserRouter>
    )
  }
}
