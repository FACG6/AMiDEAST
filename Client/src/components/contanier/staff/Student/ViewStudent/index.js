import React, { Component } from "react";
import "./index.css";
import Table from "../../../../common/Table";
import Button from "../../../../common/Button";
import Input from "../../../../common/Input";
import Loading from '../../../../Layout/Loading'

export default class ViewStudent extends Component {
  state = {
    headings: [],
    rows: [],
  }
  componentDidMount() {
    fetch('/api/v1/student', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => {
        console.log(res.data)
        if (res.data) {
          const rows = res.data;
          let rowContent = [];
          rows.map(row => {
            rowContent.push([row.id, row.firstname + ' ' + row.lastname, row.id, row.level, row.mobile_phone, <a onClick={() => console.log('object')}><i className="fa fa-trash delete-icon" aria-hidden="true" ></i></a>]);
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
              name="search"
              placeholder="Search by student number ...."
              inputClassName="search-input"
              type="text"
            />
            <Button content="search" className="search-button" />
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
