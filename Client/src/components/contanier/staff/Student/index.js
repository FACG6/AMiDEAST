import React, { Component } from 'react';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';
import ViewStudent from './ViewStudent'

export default class Student extends Component {
  render() {
    return (
      <div>
        <AddStudent />
        <EditStudent />
        <ViewStudent />
      </div>
    )
  }
}
