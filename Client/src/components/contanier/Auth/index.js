import React, { Component } from 'react'

import Button from '../../common/Button'
import LabeledInput from '../../common/LabeledInput'
import logo from '../../assets/Image/amideasblue.png'
import { firstLable, secondLable } from './staticdata'
import './index.css'

export default class Login extends Component {

  handleClick = (e) => {
    e.preventdefault()
  }
  render() {

    return (
      <div className='login'>
        <img src={logo} alt="amideast logo" className='login-logo' /> 
        <div className='mobile-container'>
          <LabeledInput {...firstLable}/>
          <LabeledInput {...secondLable}/>  
        </div> 
        <Button content='Login' className='login-btn' onClick={this.handleClick}/>    
      </div>
    )
  }
}
