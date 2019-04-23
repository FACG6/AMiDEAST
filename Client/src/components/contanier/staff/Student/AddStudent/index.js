import React, { Component } from 'react'
import LabeledInput from './../../../../common/LabeledInput'
import Button from './../../../../common/Button';

import './index.css';

export default class AddStudent extends Component {
  render() {
    return (
      <div className='add-student'>
        <h1 className='add-student-title'>
          <span className='add-student-title-border'>
            Add  Student                        
          </span>
        </h1>
        <div className='add-student-contanier'>
          <div className='add-student-contanier-left'>
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
          <div className='add-student-contanier-center'></div>
          <div className='add-student-contanier-right'>
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
            <Button content='Add' className='add-student-btn'/>
          </div>
        </div>
      </div>
    )
  }
}
