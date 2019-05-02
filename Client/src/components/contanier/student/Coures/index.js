import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Course from "../../../common/Course";
import Button from "../../../common/Button";
import "./index.css";

export default class Courses extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    const { level } = this.props;

    if (level) {
      axios.get(`/api/v1/course/level/${level}`).then(res => {
        console.log(res);
        this.setState({ data: res.data.data });
      });
    }
  }

  render() {
    const { data } = this.state;
    return !data ? (
      <h2>Loading ...</h2>
    ) : (
      <div className="courses">
        <h1 className="courses-title">Available Courses</h1>
        {data.map(item => {
          console.log(item.id);
          return (
            <div className="courses-card" key={item.id}>
              <div className="courses-card-box">
                <Course {...item} />
              </div>
              <div className="courses-card--div">
                <Link to="/student/apply">
                  <Button
                    content="Apply"
                    className="courses-card-btn"
                    id={item.id}
                    onClick={this.props.handleCourseId}
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
