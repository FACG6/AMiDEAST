import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

import Login from './contanier/Auth';
import Mobile from './Layout/Mobile';
import Desktop from './Layout/Desktop';

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
        console.log(res)
        if (res.data.isAuth) {
          this.setState({ auth: true, isLogin: true, id: res.data.id, role: res.data.role })
        } else {
          this.setState({ auth: true, })
        }
      })
  }

  handleLogin = (id) => {
    this.setState({ isLogin: true, id })
  }

  render() {
    const {auth, isLogin, id, role} = this.state;
    
    return( 
      !auth ? <h2>Loading ...</h2> : 
      <Router>
      {isLogin ?  
        <Switch>
          {role === 'student' && <Route path='/student' component={ (props) => <Mobile id={id} {...props} />} />}
          {role === 'admin' && <Route path='/staff' component={Desktop} />}
        </Switch>
      :
        <Switch >
          <Route exact path="/login" component={(props) => <Login {...props} handleLogin={this.handleLogin} />} />
          <Route path="/" render={() => <Redirect to='/login' />} />
        </Switch >
      }
      </Router> 
    )
  }
}
