import React, { Component } from "react";
import "./index.css";
import Table from "../../../../common/Table";

export default class Viewcourse extends Component {
  state = {
    headings: [
      "Course Name",
      "Date Of Publish",
      "Target Level",
      "Percentage Of Total Numbers"
    ],
    rows: [
      ["writing and reading", "47/1995", "6", "60%"],
      ["translating", "4/3/1995", "5", "80%"],
      ["samerry", "8/9/1995", "3", "70%"],
      ["sammer", "1/4/1995", "2", "50%"],
      ["sam", "1/9/1995", "8", "30%"]
    ],
  }
  render() {
    return (
      <>
        <h1 className="view-course-titel">
          <span className="view-course-line">View Course</span>
        </h1>
        <div className="view-course">
          <Table headings={this.state.headings} rows={this.state.rows} />
        </div>
      </>
    );
  }
}
