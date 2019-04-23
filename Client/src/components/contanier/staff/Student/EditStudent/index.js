import React, { Component } from 'react'
import LabeledInput from './../../../../common/LabeledInput'
import Button from './../../../../common/Button';

import './index.css';

export default class Editstudent extends Component {
  render() {
    return (
      <div className='editstudent'>
        <h1 className='editstudent-title'>
          <span className='editstudent-title-border'>
            Edit Student
        </span>
        </h1>
        <div className='editstudent-contanier'>
          <div className='editstudent-contanier-left'>
            <LabeledInput
              labelText='First name'
              id='firstname'
              name='firstname'
              placeholder='First name '
            />
            <LabeledInput
              labelText='Address'
              id='address'
              name='address'
              placeholder='Address'
            />
            <LabeledInput
              labelText='Level'
              id='level'
              name='level'
              placeholder='Level'
            />
            <LabeledInput
              labelText='Phone number '
              id='phonenumber'
              name='phonenumber'
              placeholder='Phone Number '
            />
          </div>
          <div className='editstudent-contanier-center'></div>
          <div className='editstudent-contanier-right'>
            <LabeledInput
              labelText='Last name'
              id='lastname'
              name='lastname'
              placeholder='Last name '
            />
            <LabeledInput
              labelText='Mobile number'
              id='mobilenumber'
              name='mobilenumber'
              placeholder='Mobile number'
            />
            <LabeledInput
              labelText='Password'
              id='password'
              name='password'
              placeholder='Password'
            />
            <Button content='Save' className='editstudent-btn' />
          </div>
        </div>
      </div>
    )
  }
}
