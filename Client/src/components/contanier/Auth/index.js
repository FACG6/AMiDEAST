import React, { Component } from 'react'
import Button from '../../common/Button'
import LabeledInput from '../../common/LabeledInput'
import logo from '../../assets/Image/amideasblue.png'
import './index.css'

export default class Login extends Component {

  handleClick = (e) => {
    e.preventdefault()
  }
  render() {
    const first = {
      LabeledInputClassName: 'container',
      id: 'id',
      labelClassName: 'login-container--label',
      labelText: 'ID',
      name: 'id',
      placeholder: 'Enter your ID ... ',
      inputClassName: 'login-container--input'
    };
    const second = {
      LabeledInputClassName: 'container',
      id: 'pass',
      labelClassName: 'login-container--label',
      labelText: 'Password',
      name: 'password',
      placeholder: 'Enter your password ...',
      inputClassName: 'login-container--input'
    }
    return (
      <div className='login'>
        <img src={logo} alt="amideast logo" className='login-logo' /> 
        <div className='container'>
          <LabeledInput {...first}/>
          <LabeledInput {...second}/>  
        </div> 
        <Button content='Login' className='login-btn' onClick={this.handleClick}/>    
      </div>
    )
  }
}
