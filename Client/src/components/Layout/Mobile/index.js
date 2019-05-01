import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import axios from 'axios'

import Header from './../Header';
import Footer from './../MobileFooter';
import Courses from '../../contanier/student/Coures';
import Apply from '../../contanier/student/Apply';
import Profile from '../../contanier/student/Profile';
import SideBar from '../SideBar';
import StudentCourses from '../../contanier/student/StudentCourses'

export default class Mobile extends Component {
  state = {
    menuOpen: false,
    level: null,
    courseId: null,
  }
  handleLinkClick = () => {
    this.setState({ menuOpen: false });
  }
  handleMenuClick = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  }
  handleCourseId = (e) => {
    e.preventDefault();
    this.setState({courseId: e.target.id});
    this.props.history.push('/student/apply');
  }

  componentDidMount() {
    axios
      .get(`/api/v1/student/${this.props.id}`)
      .then((res) => {
        this.setState({level: res.data.data.level})
      })
  }

  render() {
    const { id } = this.props;
    const { menuOpen } = this.state;
    const { handleMenuClick, handleLinkClick } = this;
    return (
      <BrowserRouter className='mobile-container'>
            <Header handleMenuClick={handleMenuClick} menuOpen={menuOpen} />
            <SideBar handleLinkClick={handleLinkClick} menuOpen={menuOpen}  history={this.props.history} />
            <Switch>
              <Route exact path={'/student/courses'} component={ (props) => <Courses {...props} id={id} level={this.state.level}  history={this.props.history} handleCourseId={this.handleCourseId} />} />
              <Route exact path={'/student/mycourses'} component={ () => <StudentCourses id={id} />} />
              <Route exact path={'/student/apply'} component={ () => <Apply id={id} courseId={this.state.courseId} />} />
              <Route exact path={'/student/profile'} component={ () => <Profile id={id} />} />
              <Route component={() => <div>404</div>} />
            </Switch>
            <Footer />
      </BrowserRouter>
    )
  }
}

