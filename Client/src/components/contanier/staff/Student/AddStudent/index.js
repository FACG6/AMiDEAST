import React, { Component } from 'react'
import LabeledInput from './../../../../common/LabeledInput'
import Button from './../../../../common/Button';
import './logic'
import './index.css';

export default class AddStudent extends Component {
  state = {
    firstname: '',
    address: '',
    level: '',
    phonenumber: '',
    lastname: '',
    mobilenumber: '',
    password: '',
  }

  handleInput = ({ target: { value, name } }) => this.setState({ [name]: value });
  handleClick = (e) => {
    e.preventDefault();
    // console.log(this.state)
  }
  render() {
    const { firstname, address, level, phonenumber, lastname, mobilenumber, password } = this.state;
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
