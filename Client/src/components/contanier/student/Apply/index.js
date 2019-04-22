import React, { Component } from 'react'
import CourseCard from '../../../common/Course'
import PickDay from '../../../common/PickDay'
import Button from '../../../common/Button'
import './index.css'

export default class Apply extends Component {
  state = {
    course: {
      id:0,
      titel: 'Writing & Speaking',
      desc: 'In this course you will learn the fundemtal of speaking and writign skills',
      days: ["Pick a day ..", "Sat - Mon - Wedn", "Sun - Tues - Thurs"],
      hours: ["Pick a time ..", "8:00 - 10:00 PM", "10:00 - 12:00 PM", "12:00 - 14:00 AM"]
    }
  }
  render() {
    const { days, hours } = this.state
    return (
      <div className='apply'>
        <h1 className='apply-titel'>Apply</h1>
        <CourseCard { ...this.state.course }/>
        <hr className='apply-line' />
        <h4 className='apply-tep'>Select from available options below</h4>
        <PickDay option={days}/>
        <PickDay option={hours}/>
        <Button btnClassName='apply-btn' content='Apply'/>
      </div>
    )
  }
}
