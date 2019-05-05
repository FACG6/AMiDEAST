import React, { Component } from 'react';
import { toast } from 'react-toastify';

import './index.css';
import Table from '../../../../common/Table';
import Button from '../../../../common/Button';
import Loading from '../../../../Layout/Loading'
import pageTitle from './../../../../../helpers/pageTitle'
import LabeledInput from '../../../../common/LabeledInput';

export default class ViewStudent extends Component {
  state = {
    headings: [],
    rows: [],
    search: '',
    Error: {},
    isloadding: true
  }
  handleInput = ({ target: { value, name } }) => this.setState({ [name]: value });

  handleDelete = (id) => {
    if (window.confirm('Delete the student?')) {
      fetch(`/api/v1/student/${id}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(res => {
          if (res.data) {
            toast.success(res.data);
            this.props.history.push('/staff/student/viewstudent');
          }
          else toast.error(res.error);
        })
    }
  }
  handleSearch = () => {
    const { search, rows } = this.state;
    if (search.length >= 3) {
      search.toLocaleLowerCase()
      rows.map(row => console.log(row))
      this.setState({ Error: {} })
    }
    else return this.setState({ Error: { 'search': 'Search value must be more than 3 characters ' } })
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
            rowContent.push([row.id, row.firstname + ' ' + row.lastname, row.id, row.level, row.mobile_phone,
            <a onClick={() => this.handleDelete(row.id)}>
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
          return this.setState({ rows: rowContent, Error: '', isloadding: false })
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
            onChange={this.handleInput}
            Error={Error['search']}
          />
          <Button content='search' className='search-button' onClick={() => this.handleSearch()} />
        </div>

        <div className='result'>Result:</div>
        {isloadding ? <Loading /> : rows.length !== 0 ?
          <Table headings={this.state.headings} rows={this.state.rows} history={this.props.history} pathname={this.props.location.pathname} />
          :
          <div className='no-student'>
            There is no student untill now
            <br />
            Click <a
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
