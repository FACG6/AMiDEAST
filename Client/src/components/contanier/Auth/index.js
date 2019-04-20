import React, { Component } from 'react'
import Button from '../../common/Button'
import LabeledInput from '../../common/LabeledInput'
import logo from '../../assets/Image/logoamdieast.png'
import './index.css'

export default class Login extends Component {
  render() {
    return (
      <div className='login'>
        <img src={logo} alt="amideast logo" className='login-logo' />  
        <LabeledInput />
        <LabeledInput />
        <Button content='Login' btnClassName='login-btn'/>    
      </div>
    )
  }
}
