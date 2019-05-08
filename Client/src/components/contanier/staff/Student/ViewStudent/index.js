import React, { Component } from 'react';
import { toast } from 'react-toastify';

import './index.css';
import Table from '../../../../common/Table';
import Loading from '../../../../Layout/Loading'
import pageTitle from './../../../../../helpers/pageTitle'
import LabeledInput from '../../../../common/LabeledInput';

export default class ViewStudent extends Component {
  state = {
    headings: [],
    rows: [],
    filter: [],
    search: '',
    Error: {},
    isloadding: true
  }
  handleChange = ({ target: { value, name } }) => {
    let filter = this.state.rows.filter((item) =>
      item[1].startsWith(value)
    )
    this.setState({ filter, [name]: value })
  };

  handleDelete = (id) => {
    if (window.confirm('Delete the student?')) {
      fetch(`/api/v1/student/${id}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(res => {
          if (res.data) {
            toast.success(res.data);
            this.props.history.push('/staff/student/viewstudent/');
          }
          else toast.error(res.error);
        })
    }
  }

  componentDidMount() {
    pageTitle('View Students')
    fetch('/api/v1/student', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => {
        if (res.data) {
          const rows = res.data;
          let rowContent = [];
          rows.map(row => {
            return rowContent.push([row.id, row.firstname + ' ' + row.lastname, row.id, row.level, row.mobile_phone,
            <a
              href='/'
              onClick={() => this.handleDelete(row.id)}>
              <i className='fa fa-trash delete-icon' aria-hidden='true' >
              </i>
            </a>
            ]);
          })
          this.setState({
            headings: [
              'Student Name',
              'Student Number',
              'Level ',
              'Mobile Number',
              ' '
            ]
          })
          return this.setState({ rows: rowContent, filter: rowContent, Error: '', isloadding: false })
        }
        return this.setState({ Error: res.error, isloadding: false })
      })
      .catch(err => this.setState({ Error: 'Something happen error', isloadding: false }))
  }

  render() {
    const { rows, isloadding, Error, search } = this.state;
    return (
      <div className='view-student'>
        <h1 className='view-student-title'>
          View Student
        </h1>
        <div className='search-button-div'>
          <LabeledInput
            value={search}
            name='search'
            placeholder='Search by student number ....'
            inputClassName='search-input'
            type='text'
            onChange={this.handleChange}
            Error={Error['search']}
          />
        </div>

        <div className='result'>Result:</div>
        {isloadding ? <Loading /> : rows.length !== 0 ?
          <Table headings={this.state.headings} rows={this.state.filter} history={this.props.history} pathname={this.props.location.pathname} />
          :
          <div className='no-student'>
            There is no student untill now
            <br />
            Click <a
              href='/'
              className='add-student-link'
              onClick={() => this.props.history.push('/staff/student/addstudent')}
            >
              here </a>
            to add student</div>
        }
      </div>
    );
  }
}
