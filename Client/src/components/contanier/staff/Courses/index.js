import React, { Component } from 'react'
import AddCourse from './AddCourse'
import ViewCourses from './ViewCourse';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ViewCourseDetails from './ViewCourse-Details';

export default class Courses extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <ViewCourses {...this.props} /> */}
          <Switch>
          </Switch>

          <Switch>

          </Switch>

          <Switch>
          </Switch>

          <Switch>
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}
