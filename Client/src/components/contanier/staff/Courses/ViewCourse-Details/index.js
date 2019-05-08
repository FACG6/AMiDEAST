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
    isloading: true,
    totalCount: null,
    coursename: null,
    description: null
  }
  componentDidMount() {
    pageTitle('Course Details');
    const { id } = this.props.match.params;

    fetch(`/api/v1/course/details/${id}`)
      .then(res => res.json())
      .then(res => {
        if (res.data) {
          fetch(`/api/v1/course/${id}`)
          .then(res => res.json())
          .then(res => {
            if (res.data) {
              res.data.map(row => this.setState({ coursename: row.title, description: row.description, isloading: false }))
            }
            if (res.error) {
              toast.error(res.error)
              this.setState({ isloading: false })
            }
          })
          .catch(() => {
            toast.error('There is Something error')
            this.setState({ isloading: false })
          });

          const rows = res.data;
          let rowContent = [];
          rows.map(row => {
            if (row.count === 0) {
              return rowContent;
            }
            return rowContent.push([row.id, row.days, row.h_from, row.h_to, row.count]);
          })
          this.setState({ headings: ['Days', 'From', 'To', 'Number of Student '] })
          this.setState({ rows: rowContent, isloading: false, totalCount: res.total })
        }
        if (res.error) {
          toast.error(res.error)
          this.setState({ isloading: false })
        }
      })
      .catch(() => {
        toast.error('There is Something error')
        this.setState({ isloading: false })
      })
  }

  render() {
    const { headings, rows, isloading, totalCount, coursename, description } = this.state;
    return (
      <>
        <h1 className='view-course-details-title'>
          {coursename}   <span className='count-std'>({totalCount})</span>
        </h1>
        <p className='view-course-details-description'>Description :  {description}</p>
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
