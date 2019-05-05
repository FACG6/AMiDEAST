import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './index.css';

import Footer from '../DesktopFooter';
import SideBar from '../../common/Sidebar';
import Viewcourse from '../../contanier/staff/Courses/ViewCourse';
import AddCourse from '../../contanier/staff/Courses/AddCourse'
import ViewCourseDetails from '../../contanier/staff/Courses/ViewCourse-Details';
import AddStudent from "../../contanier/staff/Student/AddStudent";
import ViewStudent from "../../contanier/staff/Student/ViewStudent";
import EditStudent from "../../contanier/staff/Student/EditStudent";

export default class Desktop extends Component {

  render() {
    return (
      <BrowserRouter className='desktop-container'>
        <div className='contanier'>
          <SideBar  {...this.props} />
          <div className='content'>
            <Switch>
              <Route exact path={'/staff/'} render={() => <Redirect to='/staff/courses/viewcourse' />} />
              <Route exact path={'/staff/courses/'} render={() => <Redirect to='/staff/courses/viewcourse' />} />
              <Route exact path={'/staff/courses/viewcourse'} render={(props) => <Viewcourse {...props} />} />
              <Route exact path={'/staff/courses/addcourse'} render={(props) => <AddCourse {...props} />} />
              <Route exact path={'/staff/courses/viewcourse/:id'} render={(props) => <ViewCourseDetails  {...props} />} />

              <Route exact path={'/staff/student/addstudent'} render={(props) => <AddStudent  {...props} />} />
              <Route exact path={'/staff/student/viewstudent'} render={(props) => <ViewStudent  {...props} />} />
              <Route exact path={'/staff/student/viewstudent/:id'} render={(props) => <EditStudent  {...props} />} />
              <Route exact path={'/staff/student/editstudent'} render={(props) => <Redirect to='/staff/student/viewstudent' />} />

            </Switch>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}