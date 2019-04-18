import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from './../Header';
import Footer from './../MobileFooter';
import Courses from '../../contanier/student/Coures';
import Apply from '../../contanier/student/Apply';
import Profile from '../../contanier/student/Profile';
import Login from '../../contanier/Auth';
import SideBar from '../SideBar';

export default class Mobile extends Component {
  state = {
    menuOpen: false,
    login: true,
  }
  handleLinkClick = () => {
    this.setState({ menuOpen: false });
  }
  handleMenuClick = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    const { login } = this.state;
    return (
      <BrowserRouter>
        {login ? (
          <>
            <Header handleMenuClick={this.handleMenuClick} menuOpen={this.state.menuOpen} />
            <SideBar handleLinkClick={this.handleLinkClick} menuOpen={this.state.menuOpen} />
            <Switch>
              <Route exact path={'/courses'} component={Courses} />
              <Route exact path={'/apply'} component={Apply} />
              <Route exact path={'/profile'} component={Profile} />
              <Route component={() => <div>404</div>} />
            </Switch>
            <Footer />
          </>
        ) : (
          null
            // <Redirect to="/login" />
          )}
      </BrowserRouter>
    )
  }
}
