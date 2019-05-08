import React, { Component } from "react";
import axios from "axios";

import CourseCard from "../../../common/Course";
import PickDay from "../../../common/PickDay";
import Button from "../../../common/Button";
import { toast } from "react-toastify";
import Loading from "./../../../Layout/Loading";

import "./index.css";

export default class Apply extends Component {
  state = {
    course: {
      id: 0,
      title: "Writing & Speaking",
      desc:
        "In this course you will learn the fundemtal of speaking and writign skills",
      days: ["Pick a day ..", "Sat - Mon - Wedn", "Sun - Tues - Thurs"],
      hours: [
        "Pick a time ..",
        "8:00 - 10:00 PM",
        "10:00 - 12:00 PM",
        "12:00 - 14:00 AM"
      ]
    },
    isLoading: true
  };

  handleClick(e) {
    e.preventDefault();
    axios.post();
  }

  render() {
    const { isLoading, course, days, hours } = this.state;
    return (
      <div className="apply">
        <h1 className="apply-title">Apply</h1>
        <div className="apply-card">
          <CourseCard {...this.state.course} />
        </div>
        <hr className="apply-line" />
        <h4 className="apply-note">Select from available options below</h4>
        <PickDay option={days} />
        <PickDay option={hours} />
        <Button
          className="apply-btn"
          content="Apply"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}
