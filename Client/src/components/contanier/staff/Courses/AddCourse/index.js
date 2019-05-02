import React, { Component } from "react";
//import showToast from 'show-toast';
import { toast } from "react-toastify";
import "./index.css";
import LabeledInput from "../../../../common/LabeledInput";
import Button from "../../../../common/Button";
import { addCourseSchema, addDatesSchema } from '../../../../../helpers/validation-schema';
const initState={
  title: '',
  description: '',
  level: 0,
  numberOfStudent: 0,
  start: 0,
  end: 0,
  days: '',
  Error: {},
  dates: []
}

export default class Addcourse extends Component {
  state = {
    title: '',
    description: '',
    level: 0,
    numberOfStudent: 0,
    start: 0,
    end: 0,
    days: '',
    Error: {},
    dates: []
  }
  handleInput = ({ target: { value, name } }) => this.setState({ [name]: value });

  handleClickAddDates = (e) => {
    e.preventDefault();
    this.setState({ Error: {} })
    const { Error, days, end, start } = this.state;
    addDatesSchema
      .validate({ days, end, start }, {
        abortEarly: false
      }).then((value) => {
        this.state.dates.push(value)
        document.getElementById('days').value = ''
        document.getElementById('start').value = '';
        document.getElementById('end').value = '';
        this.setState({ days: '', start: 0, end: 0 })
              toast.success("added successfully ");
    })
      .catch(({ inner }) => {
        if (inner) {
          const errors = inner.reduce((acc, item) => ({ ...acc, [item.path]: (item.message) }), {});
          this.setState({ Error: { ...errors } })
        }
      })
  }

  handleSubmitAddCourse = (e) => {
    e.preventDefault();
    this.setState({ Error: {} })
    const { Error, ...course } = this.state;
    addCourseSchema
      .validate(course, {
        abortEarly: false
      }).then((value) => {
        const { days, start, end } = value;
        const dates = this.state.dates;
        dates.push({ days, end, start })
        fetch('/api/v1/course', {
          method: 'POST',
          body: JSON.stringify({ value, dates }),
          credentials: 'include',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        })
          .then(res => res.json())
          .then(res => {
            if(res.data) {
              this.setState({...initState })
              toast.success('Course added successfuly ');
            }
            else {
              toast.error(res.error);
            }
        })
          .catch(err => toast.error(err))
      })
      .catch(({ inner }) => {
        if (inner) {
          const errors = inner.reduce((acc, item) => ({ ...acc, [item.path]: (item.message) }), {});
          this.setState({ Error: { ...errors } })
        }
      })
  }
  render() {
    const { title, description, end, start, numberOfStudent, days, level, Error } = this.state;

    return (
      <div className='add-course'>
        <h1 className="add-course-title">
          Add Course
        </h1>
        <form className="add-course-contanier">
          <div className="add-course-left">
            <LabeledInput
              id="title"
              labelText="Course Name:"
              type="text"
              name="title"
              value={title}
              onChange={this.handleInput}
              Error={Error['title']}
            />
            <LabeledInput
              id="numberOfStudent"
              labelText="Numbers Of Students:"
              type="number"
              name="numberOfStudent"
              value={numberOfStudent}
              onChange={this.handleInput}
              Error={Error['numberOfStudent']}
            />
            <LabeledInput
              id="description"
              labelText="Description:"
              type="text"
              name="description"
              value={description}
              onChange={this.handleInput}
              Error={Error['description']}
            />
          </div>
          <div className='add-course-center'></div>
          <div className="add-course-right">
            <LabeledInput
              id="level"
              labelText="Level"
              type="number"
              name="level"
              value={level}
              onChange={this.handleInput}
              Error={Error['level']}
            />
            <LabeledInput
              id="days"
              labelText="Days:"
              type="text"
              name="days"
              value={days}
              onChange={this.handleInput}
              Error={Error['days']}
            />
            <div className="add-course-dates">
              <div className='start'>
                <LabeledInput
                  id="start"
                  labelText="Start:"
                  type="number"
                  name="start"
                  inputClassName='dates-start'
                  value={start}
                  onChange={this.handleInput}
                  Error={Error['start']}
                />
              </div>
              <div className='end'>
                <LabeledInput
                  id="end"
                  labelText="End:"
                  type="number"
                  name="end"
                  value={end}
                  inputClassName='dates-end'
                  onChange={this.handleInput}
                  Error={Error['end']}
                />
              </div>
              <Button type='button' className="add-dates-btn" content="Add Dates" onClick={(e) => this.handleClickAddDates(e)} />
            </div>
            <Button type='submit' content='Add' className='add-course-btn' onClick={(e) => this.handleSubmitAddCourse(e)} />
          </div>
        </form>
      </div>
    );
  }
}
