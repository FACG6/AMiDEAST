import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";

// import data from './staticData'
import Course from "../../../common/Course";
import "./index.css";
import Loading from "./../../../Layout/Loading";

export default class StudentCourses extends Component {
  state = {
    data: [],
    isLoading: true
  };

  componentDidMount() {
    const { id } = this.props;
    axios
      .get(`/api/v1/course/student/${id}`)
      .then(res => {
        this.setState({ data: res.data.data, isLoading: false });
      })
      .catch(error => {
        error = JSON.parse(JSON.stringify(error));
        this.setState({ isLoading: false });
        toast.error("Sorry, something went wrong");
      });
  }

  render() {
    const { data, isLoading } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <div className="studentcourses">
        <h1 className="student-courses-title">My Courses</h1>

        {data.length === 0 ? (
          <h1 style={{ textAlign: "center" }}>You Don't Apply To Any Course</h1>
        ) : (
          data.map(item => {
            return <Course {...item} key={item.id} />;
          })
        )}
      </div>
    );
  }
}
