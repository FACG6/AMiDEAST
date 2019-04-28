import React, { Component } from 'react'
import LabeledInput from './../../../../common/LabeledInput'
import Button from './../../../../common/Button';
import { studentSchema } from './../../../../../helpers/validation-schema'
import { leftSectionInfo, rightSectionInfo } from './staticdata';

import './index.css';

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
    const { Error, ...student } = this.state;
    studentSchema
      .validate(student, {
        abortEarly: false
      })
      .then((value) => {
        // write fetch here 
        console.log(value)
      })
      .catch(({ inner, fetchError }) => {
        if (fetchError) {
          // handle fetch Error
        }
        if (inner) {
          const errors = inner.reduce((acc, item) => ({ ...acc, [item.path]: (item.message) }), {});
          this.setState({ Error: { ...errors } })
        }
      })
  }

  render() {
    return (
      <div className='edit-student'>
        <h1 className='edit-student-title'>
          Edit Student
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
