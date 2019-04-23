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
          <div className="search-button-div">
            <Input
              name="search"
              placeholder="Search by student number ...."
              inputClassName="search-input"
              className="search-input"
              type="text"
            />
            <Button
              btnClassName="search-button"
              content="search"
              className="search-button"
            />
          </div>

          <div className="result">Result:</div>

          <div className="tabel">
            <Table headings={headings} rows={rows} className="student-table" />
          </div>
        </div>
      </>
    );
  }
}
