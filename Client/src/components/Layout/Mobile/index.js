import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from './../Header';
import Footer from './../MobileFooter';
import Courses from '../../contanier/student/Coures';
import Apply from '../../contanier/student/Apply';
import Profile from '../../contanier/student/Profile';
import Login from '../../contanier/Auth';
import SideBar from '../SideBar';
import StudentCourses from '../../contanier/student/StudentCourses'

export default class Mobile extends Component {
  state = {
    menuOpen: false,
  }
  handleLinkClick = () => {
    this.setState({ menuOpen: false });
  }
  handleMenuClick = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    const { login, menuOpen } = this.state;
    const { handleMenuClick, handleLinkClick } = this;
    return (
      <BrowserRouter className='mobile-container'>
            <Header handleMenuClick={handleMenuClick} menuOpen={menuOpen} />
            <SideBar handleLinkClick={handleLinkClick} menuOpen={menuOpen}  history={this.props.history} />
            <Switch>
              <Route exact path={'/student/courses'} component={Courses} />
              <Route exact path={'/student/mycourses'} component={StudentCourses} />
              <Route exact path={'/student/apply'} component={Apply} />
              <Route exact path={'/student/profile'} component={Profile} />
              <Route exact path={'/login'} component={Login} />
              <Route component={() => <div>404</div>} />
            </Switch>
            <Footer />
      </BrowserRouter>
    )
  }
}
