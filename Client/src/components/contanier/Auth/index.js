import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import Button from "../../common/Button";
import LabeledInput from "../../common/LabeledInput";
import logo from "../../assets/Image/amideasblue.png";
import auth from "./../../auth";
import { loginSchema } from "./../../../helpers/validation-schema";
import Loading from "./../../Layout/Loading";
import "./index.css";

export default class Login extends Component {
  state = {
    id: "",
    password: "",
    isLoading: false
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value.trim()
    });
  };

  handleClick = (e, dispatch) => {
    e.preventDefault();
    // for loading ...
    this.setState({ isLoading: true });
    const { id, password } = this.state;
    loginSchema
      .validate({ id, password })
      .then(({ id, password }) =>
        axios.post("/api/v1/login", {
          password,
          id
        })
      )
      .then(res => {
        const { id, role, level } = res.data;
        toast.success("Welcome");
        auth.login(id, role, level ? level : null, () => {
          const {
            location: { state }
          } = this.props;
          state
            ? this.props.history.push(state.from)
            : this.props.history.push(`/${role}`);
        });
      })
      .catch(e => {
        // errors for validation issues && response for fetch issues
        const { errors = [], response = {} } = JSON.parse(JSON.stringify(e));
        errors[0] ? toast.error(errors[0]) : toast.error(response.data.error);
      });
  };

  render() {
    // to redirect the signed user to his page
    const { authenticated, role } = auth.isAuthenticated();
    const { isLoading } = this.state;
    if (authenticated) {
      this.props.history.push(`/${role}`);
    }
    if (isLoading) return <Loading />;
    return (
      <div className="login">
        <img src={logo} alt="amideast logo" className="login-logo" />
        <div className="mobile-container">
          <LabeledInput
            id="id"
            labelClassName="login-container--label"
            labelText="ID"
            name="id"
            placeholder="Enter your ID ... "
            inputClassName="login-container--input"
            type="number"
            onChange={this.handleChange}
          />
          <LabeledInput
            id="pass"
            labelClassName="login-container--label"
            labelText="Password"
            name="password"
            placeholder="Enter your password ..."
            inputClassName="login-container--input"
            onChange={this.handleChange}
            type="password"
          />
        </div>
        <Button
          content="Login"
          className="login-btn"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}
