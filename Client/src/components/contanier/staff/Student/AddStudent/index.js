import React, { Component } from 'react'
import LabeledInput from './../../../../common/LabeledInput'
import Button from './../../../../common/Button';
import './logic'
import './index.css';
import Label from '../../../../common/Label';

export default class AddStudent extends Component {
  state = {
    firstname: '',
    address: '',
    level: '',
    phonenumber: '',
    lastname: '',
    mobilenumber: '',
    password: '',
    Error: ''
  }

  handleInput = ({ target: { value, name } }) => {
    if (name === 'firstname') {

      const d = document.getElementById(name);
      if (value.length >= 3 && value.length <= 15) {
        this.setState({ Error: ''})
        d.setAttribute('class', 'general-input  success-value')
      } else {
        this.setState({ Error: 'should be bettween 3 and 15s' })
        return d.setAttribute('class', 'general-input danger-value')
      }
    }

    this.setState({ [name]: value.trim() })
  }
  handleClick = (e) => {
    e.preventDefault();
    // console.log(this.state)
  }
  render() {
    const { firstname, address, level, phonenumber, lastname, mobilenumber, password, Error } = this.state;
    return (
      <div className='add-student'>
        <h1 className='add-student-title'>
          <span className='add-student-title-border'>
            Add  Student
          </span>
        </h1>
        <form onSubmit={(e) => this.handleClick(e)} className='add-student-contanier'>
          <div className='add-student-contanier-left'>
            <LabeledInput
              labelText='First name'
              id='firstname'
              name='firstname' encodeURIComponent
              value={firstname}
              placeholder='First name '
              onChange={this.handleInput}
            />
            <label>{Error}</label>
            <LabeledInput
              labelText='Address'
              id='address'
              name='address'
              value={address}
              placeholder='Address'
              onChange={this.handleInput}
            />
            <LabeledInput
              labelText='Level'
              id='level'
              name='level'
              value={level}
              placeholder='Level'
              onChange={this.handleInput}
            />
            <LabeledInput
              labelText='Phone number '
              id='phonenumber'
              name='phonenumber'
              value={phonenumber}
              placeholder='Phone Number '
              onChange={this.handleInput}
            />
          </div>
          <div className='add-student-contanier-center'></div>
          <div className='add-student-contanier-right'>
            <LabeledInput
              labelText='Last name'
              id='lastname'
              name='lastname'
              value={lastname}
              placeholder='Last name '
              onChange={this.handleInput}
            />
            <LabeledInput
              labelText='Mobile number'
              id='mobilenumber'
              name='mobilenumber'
              value={mobilenumber}
              placeholder='Mobile number'
              onChange={this.handleInput}
            />
            <LabeledInput
              labelText='Password'
              id='password'
              value={password}
              name='password'
              placeholder='Password'
              onChange={this.handleInput}
            />
            <Button type='submit' content='Add' className='add-student-btn' onClick={(e) => this.handleClick(e)} />
          </div>
        </form>
      </div>
    )
  }
}
