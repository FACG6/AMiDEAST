import React, {
  Component
} from 'react'
import axios from 'axios';

import Button from '../../common/Button'
import LabeledInput from '../../common/LabeledInput'
import logo from '../../assets/Image/amideasblue.png'
import './index.css'

export default class Login extends Component {

  state = {
    id: '',
    password: '',
    loginError: '',
    role: '',
  };

  handleChange = ({
    target: {
      name,
      value
    }
  }) => {
    this.setState({
      [name]: value.trim()
    });
  };

  handleClick = (e) => {
    e.preventDefault()
    const {
      id,
      password
    } = this.state;
    if (!id || !password) {
      this.setState({
        loginError: 'All Fields Requier'
      })
    } else if (id.length === 0) {
      this.setState({
        loginError: 'ID At least Five Numbers'
      })
    } else if (password.length < 5) {
      this.setState({
        loginError: 'Password At Least Five'
      })
    } else {
      this.setState({
        loginError: ''
      });
      axios
        .post('/api/v1/login', {
          id,
          password
        })
        .then(res => {
          if (res.data.error) {
            this.setState({
              loginError: res.error
            })
          } else if (res.data.data.length) {
            if (res.data.data[0].id.toString().length === 5) {
              this.props.handleLogin(res.data.data[0].id)
              this.props.history.push('/student/courses')
            } else {
              this.props.handleLogin(res.data.data[0].id)
              this.props.history.push('/staff/courses')
            }
          } else {
            this.setState({
              loginError: 'Check your ID or Password'
            })
          }
        })
        .catch((e) => {
          this.setState({
            loginError: 'Try Againe'
          })
        })
    }
  }

  render() {
    return ( <
      div className = 'login' >
      <
      img src = {
        logo
      }
      alt = "amideast logo"
      className = 'login-logo' / >
      <
      div className = 'mobile-container' >
      <
      LabeledInput LabeledInputClassName = 'container'
      id = 'id'
      labelClassName = 'login-container--label'
      labelText = 'ID'
      name = 'id'
      placeholder = 'Enter your ID ... '
      inputClassName = 'login-container--input'
      onChange = {
        this.handleChange
      }
      type = 'number' /
      >
      <
      LabeledInput LabeledInputClassName = 'container'
      id = 'pass'
      labelClassName = 'login-container--label'
      labelText = 'Password'
      name = 'password'
      placeholder = 'Enter your password ...'
      inputClassName = 'login-container--input'
      onChange = {
        this.handleChange
      }
      type = 'password' /
      >
      <
      /div>  <
      Button content = 'Login'
      className = 'login-btn'
      onClick = {
        this.handleClick
      }
      />  <
      h2 > {
        this.state.loginError
      } < /h2> < /
      div >
    )
  }
}