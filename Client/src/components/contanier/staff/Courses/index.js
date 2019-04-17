import React, { Component } from 'react'
import AddCourse from './AddCourse'
import ViewCourses from './ViewCourse'

export default class Courses extends Component {
  render() {
    return (
      <div>
        <AddCourse />
        <ViewCourses />        
      </div>
    )
  }
}
