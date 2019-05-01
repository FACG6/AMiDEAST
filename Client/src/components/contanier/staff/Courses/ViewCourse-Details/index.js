import React, { Component } from "react";
import "./index.css";
import { Redirect } from 'react-router-dom';
import Table from "../../../../common/Table";

export default class ViewCourseDetails extends Component {
  state = {
    headings: null,
    rows: null,
    Error: null
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      fetch(`/api/v1/course/${id}`)
        .then(res => res.json())
        .then(res => {
          if (res.data) {
            const rows = res.data;
            let rowContent = [];
            rows.map(row => {
              rowContent.push([row.id, row.title, row.publish_date, row.target_level, row.number_of_student]);
            })
            this.state.headings = [
              "Course Name",
              "Date Of Publish",
              "Target Level",
              "Percentage Of Total Numbers"
            ];
            return this.setState({ rows: rowContent, Error: '' })
          }
          if (res.error) this.setState({ Error: res.error })
        })
        .catch(err => this.setState({ Error: 'Something happen error' }))
    }
    else return <Redirect to='/courses' />
  }

  render() {
    const { headings, rows, Error } = this.state;
    if (rows) {
      return (
        <>
          <h1 className="view-course-details-titel">
            <span className="view-course-details-line">View Course</span>
          </h1>
          <div className="view-course-details">
            <Table headings={headings} rows={rows} history={this.props.history} />
          </div>
        </>
      );
    }
    if (Error) return <h1>eEEEEEEEEEEEEEEEEEEEEr{Error}</h1>
    else if (!rows) return <h1>Loading ...........</h1>
  }
}