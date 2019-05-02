import React, { Component } from 'react'
import axios from 'axios'

// import data from './staticData'
import Course from '../../../common/Course'
import './index.css'

export default class StudentCourses extends Component {
  state = {
    data: null,
  }

  componentDidMount() {
    axios
      .get(`/api/v1/course/student/${this.props.id}`)
      .then((res) => {
        this.setState({data: res.data.data})
      })
      .catch(console.log)
  }

  render() {
    const { data } = this.state;
    return (
      !data ? <h2>Loading ...</h2> :
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
