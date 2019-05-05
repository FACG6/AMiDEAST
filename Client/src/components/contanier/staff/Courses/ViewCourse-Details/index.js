import React, { Component } from 'react';
import { toast } from 'react-toastify';

import './index.css';
import Table from '../../../../common/Table';
import Loading from '../../../../Layout/Loading'
import pageTitle from '../../../../../helpers/pageTitle';

export default class ViewCourseDetails extends Component {
  state = {
    headings: null,
    rows: null,
    isloading: true
  }
  componentDidMount() {
    pageTitle('Course Details');
    const { id } = this.props.match.params;
    fetch(`/api/v1/course/${id}`)
      .then(res => res.json())
      .then(res => {
        if (res.data) {
          const rows = res.data;
          let rowContent = [];
          rows.map(row => {
            rowContent.push([row.id, row.title, row.publish_date, row.target_level, row.number_of_student]);
          })
          this.setState({
            headings: [
              'Course Name',
              'Date Of Publish',
              'Target Level',
              'Percentage Of Total Numbers'
            ]
          });
          return this.setState({ rows: rowContent, Error: '', isloading: false })
        }
        if (res.error) {
          toast.error(res.error)
          this.setState({ isloading: false })
        }
      })
      .catch(err => {
        toast.error('There is Something error')
        this.setState({ isloading: false })
      })
  }

  render() {
    const { headings, rows, isloading } = this.state;
    return (
      <>
        <h1 className='view-course-details-titel'>
          <span className='view-course-details-line'>View Course</span>
        </h1>
        {!isloading ?
          <div className='view-course-details'>
            <Table headings={headings} rows={rows} history={this.props.history} />
          </div>
          :
          <Loading />
        }
      </>
    );
  }


}
