import React, { Component } from "react";
import "./index.css";
import Table from "../../../../common/Table";
import Button from "../../../../common/Button";
import Input from "../../../../common/Input";

export default class ViewStudent extends Component {
  state = {
    headings: [
      "Student Name",
      "Student Number",
      "Level ",
      "Mobile Number",
    ],
    rows: [
      ["John Doe", "356879", "3", "05971346997"],
      ["John Doe", "356879", "3", "05971346997"],
    ],
  }
  render() {
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

          <div className="result">Result:</div>

          <div className="view-student">
            <Table headings={this.state.headings} rows={this.state.rows} />
          </div>
        </div>
      </>
    );
  }
}
