import React, { Component } from "react";
import { toast } from "react-toastify";

import "./index.css";
import Table from "../../../../common/Table";
import Loading from '../../../../Layout/Loading'
import pageTitle from "../../../../../helpers/pageTitle";
import LabeledInput from '../../../../common/LabeledInput';

export default class Viewcourse extends Component {
  state = {
    headings: [],
    rows: [],
    filter: [],
    Error: null,
    isloading: true,
    search: ''
  }

  handleChange = ({ target: { value, name } }) => {
    value.toLowerCase()
    let filter = this.state.rows.filter((item) =>
      item[1].toLowerCase().startsWith(value)
    )
    this.setState({ filter, [name]: value.toLowerCase() })
  };

  handleDelete = (id) => {
    if (window.confirm('Delete the course?')) {
      fetch(`/api/v1/course/${id}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(res => {
          if (res.data) {
            toast.success(res.data);
            this.props.history.push('/staff/courses/viewcourse/');
            this.setState({ isloading: false })
          }
          else toast.error(res.error);
        })
    }
  }
  componentDidMount() {
    pageTitle('View Course')
    fetch('/api/v1/course', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => {
        if (res.data) {
          const rows = res.data;
          let rowContent = [];
          rows.map(row => {
            return rowContent.push([row.id, row.title, row.publish_date, row.target_level, row.number_of_student,
            <a
              href='/'
              onClick={() => this.handleDelete(row.id)}>
              <i className="fa fa-trash delete-icon" aria-hidden="true" ></i>
            </a>
            ]);
          })
          this.setState({
            headings: [
              "Course Name",
              "Date Of Publish",
              "Target Level",
              "Percentage Of Total Numbers",
              " "
            ]
          });
          return this.setState({ rows: rowContent, filter: rowContent, Error: '', isloading: false })
        }
        return this.setState({ Error: res.error, isloading: false })
      })
      .catch(err => this.setState({ Error: 'Something happen error', isloading: false }))
  }
  render() {
    const { headings, filter, isloading, search } = this.state;
    if (!isloading) {
      return (
        <div>
          <h1 className="view-course-titel">
            <span className="view-course-line">View Course</span>
          </h1>
          <div className='search-button-div'>
            <LabeledInput
              value={search}
              name='search'
              placeholder='Search by course number ....'
              inputClassName='search-input'
              type='text'
              onChange={this.handleChange}
              Error={Error['search']}
            />
          </div>
          <div className="view-course">
            {filter.length !== 0 ?
              <Table headings={headings} rows={filter} history={this.props.history} pathname={this.props.location.pathname}  />
              :
              <div className='no-courses'>
                There is no courses untill now
                <br />
                Click
                <a
                  href='/'
                  className='add-course-link'
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.history.push('/staff/courses/addcourse')
                  }}
                >
                  here </a>
                to add coures</div>}
          </div>
        </div>
      );
    }
    else return <Loading />
  }
}
