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
              labelClassName="course-label"
              type="text"
              name="courseName"
              inputClassName="course-input"
            />
            <LabeledInput
              LabeledInputClassName="numbers-of-students"
              id="NO"
              labelText="Numbers Of Students:"
              labelClassName="course-label"
              min="3"
              max="30"
              type="number"
              name="numberOfStudent"
              inputClassName="course-input"
            />
            <LabeledInput
              LabeledInputClassName="description"
              id="desc"
              labelText="Description:"
              labelClassName="course-label"
              type="text"
              name="description"
              inputClassName="course-input"
            />
          </div>
          <div className="right">
            <LabeledInput
              LabeledInputClassName="level"
              id="level"
              labelText="Level"
              labelClassName="course-label"
              type="number"
              name="level"
              min="1"
              max="12"
              inputClassName="course-input"
            />
            <LabeledInput
              LabeledInputClassName="days"
              id="days"
              labelText="Days:"
              labelClassName="course-label"
              type="text"
              name="days"
              inputClassName="course-input"
            />
            <div className="dates">
              <div className='start'>
                <LabeledInput
                  LabeledInputClassName="start"
                  id="start"
                  labelText="Start:"
                  labelClassName="course-label"
                  type="number"
                  name="start"
                  min="8"
                  max="17"
                  inputClassName="course-input"
                />
              </div>
              <div className='end'>
                <LabeledInput
                  LabeledInputClassName="end"
                  id="end"
                  labelText="End:"
                  labelClassName="course-label"
                  type="number"
                  name="end"
                  min="9"
                  max="18"
                  inputClassName="course-input"
                />
              </div>
              <div className='add-dates'>
                <Button btnClassName="add-dates-button" content="Add Dates" />
              </div>
            </div>
            <div className='add-course-btn'>
              <Button btnClassName="add-course-button" content="Add" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
