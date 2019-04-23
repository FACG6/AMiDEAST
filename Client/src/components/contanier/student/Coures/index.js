import React, { Component } from 'react'

import Course from '../../../common/Course'
import Button from '../../../common/Button'
import data from './staticData'
import './index.css'

export default class Courses extends Component {

  handleBtnClick = (e) => {
    e.preventDefault()
  }
  
  render() {
    return (
      <div className='courses'>
        <h1 className='courses-title'>Available Courses</h1>
        {data.map( item => {
          return (
            <div className='courses-card' key={item.id}>
              <div className='courses-card-box'>
                <Course {...item}/>
              </div>
              <div className='courses-card--div'>
                <Button content='Apply' className='courses-card-btn' onClick={this.handleBtnClick} />
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
