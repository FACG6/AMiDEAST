import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Footer from '../DesktopFooter';
import SideBar from '../../common/Sidebar';
import Student from '../../contanier/staff/Student';
import Viewcourse from '../../contanier/staff/Courses/ViewCourse';
import AddCourse from '../../contanier/staff/Courses/AddCourse'
import ViewCourseDetails from '../../contanier/staff/Courses/ViewCourse-Details';

export default class Desktop extends Component {
  state = {
  }
  render() {
    return (
      <BrowserRouter className='desktop-container'>
        <div className='contanier'>
          <SideBar />
          <div>
            <Switch>
              <Route exact path={'/staff/courses/'} render={(props) => <Viewcourse {...props} />} />
              <Route exact path={'/staff/courses/viewcourse'} render={(props) => <Viewcourse {...props} />} />
              <Route exact path={'/staff/courses/addcourse'} render={(props) => <AddCourse {...props} />} />
              <Route exact path={'/staff/courses/:id'} render={(props) => <ViewCourseDetails  {...props} />} />
              <Route exact path={'/staff/courses/viewcourse/:id'} render={(props) => <ViewCourseDetails  {...props} />} />
              <Route exact path={'/staff/student/'} component={Student} />
            </Switch>       
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}