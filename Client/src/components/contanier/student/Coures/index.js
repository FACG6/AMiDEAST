import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Course from "../../../common/Course";
import Button from "../../../common/Button";
import { toast } from "react-toastify";
import Loading from "./../../../Layout/Loading";
import auth from "./../../../auth";

import "./index.css";

export default class Courses extends Component {
  state = {
    data: [],
    appledCourses: [],
    isLoading: true
  };

  componentDidMount() {
    const { id, level } = auth.isAuthenticated();
    if (level) {
      axios
        .post(`/api/v1/course/level/${level}`, { studentId: id })
        .then(res => {
          this.setState({ data: res.data.data, isLoading: false });
        })
        .catch(err => {
          err = JSON.parse(JSON.stringify(err));
          this.setState({ isLoading: false });
          toast.error("Sorry, something went wrong");
        });
    } else {
      console.log(auth.isAuthenticated());
      console.log("The Level IS  :  ", level, id);
    }
  }
  handleClick = (id, course_id) => {
    const { id: student_id } = auth.isAuthenticated();
    this.setState({ isLoading: true });
    axios
      .post(`/api/v1/course/${course_id}`, { id, student_id })
      .then(res => {
        toast.success(res.data.data);
        this.setState({
          isLoading: false,
          appledCourses: [...this.state.appledCourses, id]
        });
      })
      .catch(err => {
        err = JSON.parse(JSON.stringify(err));
        this.setState({
          isLoading: false,
          appledCourses: [...this.state.appledCourses, id]
        });
        toast.error(err.error);
      });
    this.setState({ appledCourses: [...this.state.appledCourses, id] });
  };

  render() {
    const { data, isLoading, appledCourses } = this.state;
    console.log(isLoading);
    return isLoading ? (
      <Loading />
    ) : (
      <div className="courses">
        <h1 className="courses-title">Available Courses</h1>
        {data.length === 0 ? (
          <h1 style={{ textAlign: "center" }}>You Don't Have Any Courses</h1>
        ) : (
          data.map(item => {
            return appledCourses.includes(item.id) ? null : (
              <div className="courses-card" key={item.id}>
                <Course {...item} />
                <div className="courses-card--div">
                  <Button
                    content="Apply"
                    className="courses-card-btn"
                    id={item.id}
                    onClick={() => this.handleClick(item.id, item.course_id)}
                  />
                </div>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
