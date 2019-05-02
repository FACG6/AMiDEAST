import React, { Component } from 'react'
import { toast } from "react-toastify";

import LabeledInput from './../../../../common/LabeledInput'
import Button from './../../../../common/Button';
import { studentSchema } from './../../../../../helpers/validation-schema'
import './index.css';

const initState = {
  firstname: '',
  address: '',
  level: 0,
  phonenumber: '',
  lastname: '',
  mobilenumber: '',
  password: '',
  Error: {}
}

export default class AddStudent extends Component {
  state = {
    firstname: '',
    address: '',
    level: 0,
    phonenumber: '',
    lastname: '',
    mobilenumber: '',
    password: '',
    Error: {}
  }

  handleInput = ({ target: { value, name } }) => this.setState({ [name]: value });

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ Error: {} })
    const { Error, ...student } = this.state;
    studentSchema
      .validate(student, {
        abortEarly: false
      }).then((value) => {
        //write fetch here
        console.log(value)
        fetch('/api/v1/student', {
          method: 'POST',
          body: JSON.stringify({ ...value }),
          credentials: 'include',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        })
          .then(res => res.json())
          .then(res => {
            if (res.data) {
              this.setState({ ...initState })
              toast.success('Student added successfuly ');
            }
            else {
              toast.error(res.error);
            }
          })
          .catch(err => toast.error(err))
      })
      .catch(({ inner }) => {
        if (inner) {
          const errors = inner.reduce((acc, item) => ({ ...acc, [item.path]: (item.message) }), {});
          this.setState({ Error: { ...errors } })
        }
      })
  }
  render() {
    const { firstname, address, level, phonenumber, lastname, mobilenumber, password, Error } = this.state;
    return (
      <div className='add-student'>
        <h1 className='add-student-title'>
          Add  Student
        </h1>
        <form className='add-student-contanier'>
          <div className='add-student-contanier-left'>
            <LabeledInput
              labelText='First name'
              id='firstname'
              name='firstname'
              value={firstname}
              placeholder='First name '
              onChange={this.handleInput}
              Error={Error['firstname']}
            />
            <LabeledInput
              labelText='Last name'
              id='lastname'
              name='lastname'
              value={lastname}
              placeholder='Last name '
              onChange={this.handleInput}
              Error={Error['lastname']}
            />
            <LabeledInput
              labelText='Level'
              id='level'
              name='level'
              value={level}
              placeholder='Level'
              onChange={this.handleInput}
              type='Number'
              Error={Error['level']}
            />
            <LabeledInput
              labelText='Phone number '
              id='phonenumber'
              name='phonenumber'
              value={phonenumber}
              placeholder='Phone Number '
              onChange={this.handleInput}
              Error={Error['phonenumber']}
            />
          </div>
          <div className='add-student-contanier-center'></div>
          <div className='add-student-contanier-right'>
            <LabeledInput
              labelText='Mobile number'
              id='mobilenumber'
              name='mobilenumber'
              value={mobilenumber}
              placeholder='Mobile number'
              onChange={this.handleInput}
              Error={Error['mobilenumber']}
            />
            <LabeledInput
              labelText='Address'
              id='address'
              name='address'
              value={address}
              placeholder='Address'
              onChange={this.handleInput}
              Error={Error['address']}
            />
            <LabeledInput
              labelText='Password'
              type='password'
              id='password'
              value={password}
              name='password'
              placeholder='Password'
              onChange={this.handleInput}
              Error={Error['password']}
            />
            <br />
            <Button type='submit' content='Add' className='add-student-btn' onClick={this.handleClick} />
          </div>
        </form>
      </div>
    )
  }
}
