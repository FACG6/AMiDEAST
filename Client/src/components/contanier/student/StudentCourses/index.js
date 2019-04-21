import React, { Component } from 'react'
import data from './staticData'
import Course from '../../../common/Course'
import './index.css'

export default class StudentCourses extends Component {
  render() {
    return (
      <div className='studentcourses'>
        <h1 className='studentcourses-titel'>My Courses</h1>
        {data.map(item => {
          return (
            <Course {...item} key={item.id} />
          )
        })}
      </div>
    )
  }
}
