import React, { Component } from 'react'
import axios from 'axios'

import CourseCard from '../../../common/Course'
import PickTime from '../../../common/PickTime'
import Button from '../../../common/Button'
import './index.css'

export default class Apply extends Component {
  state = {
    data: [],
    dates: [],
    aplliedError: '',
    datesId: '',
  }
  componentDidMount() {
    axios
      .get(`/api/v1/course/${this.props.courseId}`)
      .then((res) => {
        const { title,
          description,
          publish_date,
        } = res.data.rows[0];
        const info = [];
        info.push(title)
        info.push(description)
        info.push(publish_date)
        this.setState({ data: info })
        const dates = [];
        for (let i = 1; i < res.date.rows.length; i++) {
          dates.push({
            dayes: res.rows[i].dayes, h_from: res.rows[i].h_from, h_to: res.rows[i].h_to,
            id: res.rows[i].id
          })

        }
        this.setState({ dates })
      }


      )
  }
  handleChange = (e) => {
    this.setState({ datesId: e.target.value });
  };


  handleClick = (e) => {
    e.preventDefault()
    const studentid = this.props.id
    const isApplied = this.props.isApplied
    const datesId = this.state;

    if (!datesId) {
      this.setState({
        aplliedError: 'select dates'
      })
    }
    else if (!isApplied) {
      this.setState({
        aplliedError: ''
      });
      axios
        .post(`/api/v1/course/${this.props.courseId}`, {
          datesId,
          studentid
        })
        .then(res => {
          if (res.error) {
            this.setState({
              aplliedError: res.error
            })
          } else if (res.data) {

            this.props.handelApplied(res.data)
            this.props.history.push('/api/v1/course/')

          }
        })
        .catch((e) => {
          this.setState({
            aplliedError: 'try again'
          })
        })
    }
  }


  render() {
    const { dates, data, datesId } = this.state;
    return (
      <div className='apply'>
        <h1 className='apply-title'>Apply</h1>
        <div className='apply-card'>
          <CourseCard {...data} />
        </div>
        <hr className='apply-line' />
        <h4 className='apply-note'>Select from available options below</h4>
        <PickTime option={dates} datesId={datesId} onChange={this.handleChange} />
        <Button className='apply-btn' content='Apply' onClick={this.handleClick} />
        <h2> {this.state.aplliedError} </h2>
      </div>
    )
  }
}

