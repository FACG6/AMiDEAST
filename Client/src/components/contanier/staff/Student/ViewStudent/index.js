import React, { Component } from "react";
import { toast } from "react-toastify";
import { Redirect } from 'react-router-dom';

import "./index.css";
import Table from "../../../../common/Table";
import Button from "../../../../common/Button";
import Input from "../../../../common/Input";
import Loading from '../../../../Layout/Loading'

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
    console.log(id);
    if (window.confirm('Delete the item?')) {
      fetch(`/api/v1/student/${id}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
          if (res.data) {
            toast.success(res.data);
            this.props.history.push('/staff/student/viewstudent');
          }
          else toast.error(res.error);
        })
    }
  }
  handleSearch = () => {
    /*console.log('object')
    this.state.rows[0].filter(a =>

      console.log(a.toString().search(/Fatma/))
    )*/
  }

  componentDidMount() {
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
              <i className="fa fa-trash delete-icon" aria-hidden="true" >
              </i>
            </a>
            ]);
          })
          this.setState({
            headings: [
              "Student Name",
              "Student Number",
              "Level ",
              "Mobile Number",
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
    const { rows, isloadding } = this.state;
    return (
      <>
        <h1 className="view-student-titel">
          <span className="view-student-line ">View Student</span>
        </h1>
        <div className="view-student">
          <div className="search-button-div">
            <Input
              value={this.state.search}
              name="search"
              placeholder="Search by student number ...."
              inputClassName="search-input"
              type="text"
              onChange={this.handleInput}
              Error={this.state.Error['search']}
            />
            <Button content="search" className="search-button" onClick={() => this.handleSearch()} />
          </div>


          <div className="result">Result:</div>
          <div className="view-student">
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
        </div>
      </>
    );
  }
}
