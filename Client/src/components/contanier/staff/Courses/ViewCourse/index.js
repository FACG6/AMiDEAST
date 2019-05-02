import React, { Component } from "react";
import "./index.css";
import Table from "../../../../common/Table";
import Loading from '../../../../Layout/Loading'

export default class Viewcourse extends Component {
  state = {
    headings: null,
    rows: null,
    Error: null
  }
  componentDidMount() {
    fetch('/api/v1/course', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => {
        if (res.data) {
          const rows = res.data;
          let rowContent = [];
          rows.map(row => {
            rowContent.push([row.id, row.title, row.publish_date, row.target_level, row.number_of_student, <a onClick={() => console.log('object')}><i className="fa fa-trash delete-icon" aria-hidden="true" ></i></a>]);
          })
          this.state.headings = [
            "Course Name",
            "Date Of Publish",
            "Target Level",
            "Percentage Of Total Numbers",
            " "
          ];
          return this.setState({ rows: rowContent, Error: '' })
        }
        return this.setState({ Error: res.error })
      })
      .catch(err => this.setState({ Error: 'Something happen error' }))
  }
  render() {
    const { headings, rows, Error } = this.state;
    if (rows) {
      return (
        <div>
          <h1 className="view-course-titel">
            <span className="view-course-line">View Course</span>
          </h1>
          <div className="view-course">
            <Table headings={headings} rows={rows} history={this.props.history} pathname={this.props.location.pathname} />
          </div>
        </div>
      );
    }
    else if (!rows) return <Loading />
    else return <h1>no courses</h1>
  }
}
