import React, { Component } from 'react'
import LabeledInput from './../../../../common/LabeledInput'
import Button from './../../../../common/Button';
import { studentSchema } from './../../../../../helpers/validation-schema'

import './index.css';

const leftSectionInfo = [
  ['firstname', 'First name'],
  ['lastname', 'Last name'],
  ['level', 'Level'],
  ['phonenumber', 'Phone number '],
];
const rightSectionInfo = [
  ['mobilenumber', 'Mobile number'],
  ['address', 'Address'],
  ['password', 'Password']
];

export default class EditStudent extends Component {
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
  handleChange = ({ target: { value, name } }) => {
    if (name === 'level') {
      if (!isNaN(Number(value))) {
        this.setState({ [name]: value });
      }
    } else this.setState({ [name]: value });
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ Error: {} })
    studentSchema
      .validate({ ...this.state }, {
        abortEarly: false
      })
      .catch(({ inner }) => {
        const errors = inner.reduce((acc, item) => {
          acc[item.path] = (item.message);
          return acc;
        }, {});
        this.setState({ Error: { ...errors } })
      })
      .then((value) => {
        // write fetch here 
      })
  }

  render() {
    return (
      <div className='edit-student'>
        <h1 className='edit-student-title'>
          <span className='edit-student-title-border'>
            Edit Student
        </span>
        </h1>
        <form className='edit-student-contanier'>
          <div className='edit-student-contanier-left'>
            {

              leftSectionInfo.map(info => {
                return <LabeledInput
                  labelText={info[1]}
                  id={info[0]}
                  name={info[0]}
                  placeholder={info[1]}
                  onChange={this.handleChange}
                  value={this.state[info[0]]}
                  Error={this.state.Error[info[0]]}
                />
              })
            }
          </div>
          <div className='edit-student-contanier-center'></div>
          <div className='edit-student-contanier-right'>
            {rightSectionInfo.map(info => {
              return <LabeledInput
                labelText={info[1]}
                id={info[0]}
                name={info[0]}
                placeholder={info[1]}
                onChange={this.handleChange}
                value={this.state[info[0]]}
                Error={this.state.Error[info[0]]}
              />
            })}
            <Button type='submit' content='Save' className='edit-student-btn' onClick={this.handleClick} />
          </div>
        </form>
      </div>
    )
  }
}
