import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './contanier/Auth';
import Mobile from './Layout/Mobile';
import Descktop from './Layout/Desktop';
import axios from 'axios';

export default class App extends Component {
  state = {
    auth: false,
    isLogin: false,
    role: '',
    id: '',
  }
  componentDidMount() {
    axios
      .get('/api/v1/auth')
      .then(res => {
        if (res.data.isAuth) {
          this.setState({ auth: true, isLogin: true, id: res.data.id })
        } else {
          this.setState({ auth: true })
        }
      })
  }

  handleLogin = (id) => {
    this.setState({ isLogin: true, id })
  }

  render() {
    const { auth, isLogin, role, id } = this.state;
    return (auth ?
      <Router>
        {isLogin ? (id.toString().length === 5 ?
          <Switch>
            <Route path="/student" component={Mobile} />
          </Switch> :
          <Switch>
            <Route path="/staff" component={Descktop} />
          </Switch>
        )
          :
          < Switch >
            <Route exact path="/login" component={(props) => <Login {...props} handleLogin={this.handleLogin} />} />
            <Route path="/" render={() => <Redirect to='/login' />} />
          </Switch >
        }
      </Router > :
      <h1>Loeding ...</h1>
    );
  }

}

