import React, { Component } from 'react'
import Course from '../../../common/Course'
import Button from '../../../common/Button'
import data from './staticData'
import './index.css'

export default class Courses extends Component {
  
  render() {
    return (
      <div className='courses'>
        <h1 className='courses-titel'>Available Courses</h1>
        {data.map( item => {
          return (
            <div className='courses-card' key={item.id}>
              <Course {...item}/>
              <Button content='Apply' btnClassName='courses-btn'/>
            </div>
          )
        })}
      </div>
    )
  }
}
