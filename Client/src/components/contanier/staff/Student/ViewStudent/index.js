import React, { Component } from "react";
import { toast } from "react-toastify";

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
    Error: {}
  }
  handleInput = ({ target: { value, name } }) => this.setState({ [name]: value });

  handleDelete = (id) => {
    console.log(id);
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
  handleSearch = () => {
    if (this.state.search != '') {
      //fillter the student
      console.log('search')
    }
    else {
      this.setState({ Error: {'search':'Enter vlaue'} })
    }
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
            rowContent.push([row.id, row.firstname + ' ' + row.lastname, row.id, row.level, row.mobile_phone, <a onClick={() => this.handleDelete(row.id)}><i className="fa fa-trash delete-icon" aria-hidden="true" ></i></a>]);
          })
          this.state.headings = [
            "Student Name",
            "Student Number",
            "Level ",
            "Mobile Number",
            ' '
          ]
          return this.setState({ rows: rowContent, Error: '' })
        }
        return this.setState({ Error: res.error })
      })
      .catch(err => this.setState({ Error: 'Something happen error' }))
  }

  render() {
    const { rows } = this.state;
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
          {rows ?
            <>
              <div className="result">Result:</div>
              <div className="view-student">
                <Table headings={this.state.headings} rows={this.state.rows} history={this.props.history} pathname={this.props.location.pathname} />
              </div>
            </>
            :
            !rows ? <h1>no coursesg</h1> : <Loading />
          }
        </div>
      </>
    );
  }
}
