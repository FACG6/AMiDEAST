import React, { Component } from "react";
import "./index.css";
import Table from "../../../../common/Table";
import Button from "../../../../common/Button";
import Input from "../../../../common/Input";

export default class ViewStudent extends Component {
  render() {
    const headings = [
      "Student Name",
      "Student Number",
      "Level ",
      "Mobile Number"
    ];
    const rows = [
      ["John Doe", "356879", "3", "05971346997"],
      ["John Doe", "356879", "3", "05971346997"]
    ];

    return (
      <>
        <h1 className="view-student-titel">
          <span className="view-student-line ">View Student</span>
        </h1>

        <div className="view-student">
          <Input
            name="search"
            placeholder="Search by student number ...."
            inputClassName="search-input"
            type="text"
          />
          <div className="search-button">
            <Button btnClassName="search-button" content="search" />
          </div>
          <span>Result:</span>
          <Table headings={headings} rows={rows} />
        </div>
      </>
    );
  }
}
