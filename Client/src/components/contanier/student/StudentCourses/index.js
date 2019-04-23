import React, { Component } from 'react'

import data from './staticData'
import Course from '../../../common/Course'
import './index.css'

export default class StudentCourses extends Component {
  state = {}
  render() {
    return (
      <div className='studentcourses'>
        <h1 className='student-courses-title'>My Courses</h1>
        {data.map(item => {
          return (
            <Course {...item} key={item.id} />
          )
        })}
      </div>
    )
  }
}
