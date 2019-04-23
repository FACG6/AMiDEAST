import React, { Component } from "react";
import "./index.css";
import LabeledInput from "../../../../common/LabeledInput";
import Button from "../../../../common/Button";

export default class Addcourse extends Component {
  render() {
    return (
      <>
        <h1 className="add-course-titel">
          <span className="add-course-line ">Add Course</span>
        </h1>
        <div className="add-course">
          <div className="left">
            <LabeledInput
              LabeledInputClassName="course-name"
              id="courseName"
              labelText="Course Name:"
              labelClassName="course-name-label"
              type="text"
              name="courseName"
              inputClassName="course-name-input"
            />
            <LabeledInput
              LabeledInputClassName="numbers-of-students"
              id="NO"
              labelText="Numbers Of Students:"
              labelClassName="numbers-of-students-label"
              min="3"
              max="30"
              type="number"
              name="numberOfStudent"
              inputClassName="numbers-of-students-input"
            />
            <LabeledInput
              LabeledInputClassName="description"
              id="desc"
              labelText="Description:"
              labelClassName="description-label"
              type="text"
              name="description"
              inputClassName="description-input"
            />
          </div>
          <div className="right">
            <LabeledInput
              LabeledInputClassName="level"
              id="level"
              labelText="Level"
              labelClassName="level-label"
              type="number"
              name="level"
              min="1"
              max="12"
              inputClassName="level-input"
            />
            <LabeledInput
              LabeledInputClassName="days"
              id="days"
              labelText="Days:"
              labelClassName="days-label"
              type="text"
              name="days"
              inputClassName="days-input"
            />
            <div className="dates">
              <LabeledInput
                LabeledInputClassName="start"
                id="start"
                labelText="Start:"
                labelClassName="start-label"
                type="number"
                name="start"
                min="8"
                max="17"
                inputClassName="start-input"
              />
              <LabeledInput
                LabeledInputClassName="end"
                id="end"
                labelText="End:"
                labelClassName="end-label"
                type="number"
                name="end"
                min="9"
                max="18"
                inputClassName="end-input"
              />
              <Button btnClassName="add-dates-button" content="Add Dates" />
            </div>
            <div className="add-button">
              <Button btnClassName="add-course-button" content="Add" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
