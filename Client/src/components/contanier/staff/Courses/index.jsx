import React, { Component } from 'react'
import Addcourses from './addcourse/index'
import Viewcourses from './viewcourse/index'

export default class Courses extends Component {
  render() {
    return (
      <div>
        <Addcourses />
        <Viewcourses />        
      </div>
    )
  }
}
