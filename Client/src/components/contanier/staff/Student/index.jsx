import React, { Component } from 'react';
import Addstudent from './addstudent/index';
import Editstudent from './editstudent/index';
import Viewstudent from './viewstudent/index'

export default class Student extends Component {
  render() {
    return (
      <div>
        <Addstudent />
        <Editstudent />
        <Viewstudent />
      </div>
    )
  }
}
