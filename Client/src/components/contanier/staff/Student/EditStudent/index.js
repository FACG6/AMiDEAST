import React, { Component } from 'react'
import { toast } from "react-toastify";

import LabeledInput from './../../../../common/LabeledInput'
import Button from './../../../../common/Button';
import { studentSchema } from './../../../../../helpers/validation-schema'
import { leftSectionInfo, rightSectionInfo } from './staticdata';
import { Redirect } from 'react-router-dom';
import pageTitle  from './../../../../../helpers/pageTitle'

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
        const { id } = this.props.match.params;
        if (id) {
          fetch(`/api/v1/student/${id}`, {
            method: 'PUT',
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
                toast.success(res.data);
                this.props.history.push('/staff/student/viewstudent/');
              }
              else toast.error(res.error);
            })
            .catch(err => toast.error(err))
        }
        else return <Redirect to='/staff/student/viewstudent/' />
      })
      .catch(({ inner }) => {
        if (inner) {
          const errors = inner.reduce((acc, item) => ({ ...acc, [item.path]: (item.message) }), {});
          this.setState({ Error: { ...errors } })
        }
      })
  }

  componentDidMount() {
    pageTitle('Edit Student');
    const { id } = this.props.match.params;
      fetch(`/api/v1/student/${id}`)
        .then(res => res.json())
        .then(res => {
          if (res.data) {
            const rows = res.data;
            return this.setState({
              firstname: rows.firstname,
              address: rows.address,
              level: rows.level,
              phonenumber: rows.home_phone,
              lastname: rows.lastname,
              mobilenumber: rows.mobile_phone,
              password: rows.password,
            })
          }
          if (res.error) this.setState({ Error: res.error })
        })
        .catch(err => this.setState({ Error: 'Something happen error' }))
   
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
