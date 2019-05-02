import React, { Component } from "react";
import axios from "axios";

import TextCard from "../../../common/TextCard";
import "./index.css";
import Loading from "./../../../Layout/Loading";

export default class Profile extends Component {
  state = {
    level: [],
    data: []
  };

  componentDidMount() {
    axios.get(`/api/v1/student/${this.props.id}`).then(res => {
      const { firstname, lastname, level, mobile_phone, id } = res.data.data;
      const info = [];
      info.push(`${firstname} ${lastname}`);
      info.push(mobile_phone);
      info.push(id);
      this.setState({ level: level, data: info });
    });
  }

  render() {
    const label = ["Name : ", "Phone Number : ", "Amideast ID : "];
    const { data } = this.state;

    return data.length === 0 ? (
      <Loading />
    ) : (
      <div className="profile">
        <h2 className="profile-titel">Profile</h2>
        <h3 className="profile-level">Level {this.state.level}</h3>
        {label.map((item, index) => {
          return <TextCard data={data[index]} label={item} key={index} />;
        })}
      </div>
    );
  }
}
