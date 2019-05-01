import React, { Component } from "react";
import "./index.css";
import LabeledInput from "../../../../common/LabeledInput";
import Button from "../../../../common/Button";

export default class Addcourse extends Component {
  state = {
    title: '',
    description: '',
    level: 0,
    numberOfStudent: '',
    start: 0,
    end: 0,
    days: '',
  }
  handleClickAddDates = () => {
  }
  
  handleSubmitAddCourse = (e) => {
    e.preventDefault();
  }
  render() {
    return (
      <div className='add-course'>
        <h1 className="add-course-title">
          Add Course
        </h1>
        <form onSubmit={(e) => this.handleSubmitAddCourse(e)} className="add-course-contanier">
          <div className="add-course-left">
            <LabeledInput
              id="coursename"
              labelText="Course Name:"
              type="text"
              name="title"
            />
            <LabeledInput
              id="NO"
              labelText="Numbers Of Students:"
              min="3"
              max="30"
              type="number"
              name="numberOfStudent"
            />
            <LabeledInput
              id="desc"
              labelText="Description:"
              type="text"
              name="description"
            />
          </div>
          <div className='add-course-center'></div>
          <div className="add-course-right">
            <LabeledInput
              id="level"
              labelText="Level"
              type="number"
              name="level"
              min="1"
              max="12"
            />
            <LabeledInput
              id="days"
              labelText="Days:"
              type="text"
              name="days"
            />
            <div className="add-course-dates">
              <div className='start'>
                <LabeledInput
                  id="start"
                  labelText="Start:"
                  type="number"
                  name="start"
                  min="8"
                  max="17"
                  inputClassName='dates-start'
                />
              </div>
              <div className='end'>
                <LabeledInput
                  id="end"
                  labelText="End:"
                  type="number"
                  name="end"
                  min="9"
                  max="18"
                  inputClassName='dates-end'
                />
              </div>
              <Button type='button' className="add-dates-btn" content="Add Dates" onClick={this.handleClickAddDates} />
            </div>
            <Button type='submit' content='Add' className='add-course-btn' />
          </div>
        </form>
      </div>
    );
  }
}
