import React, { Component } from 'react';
import DataTable from './DataTable';

class Table extends Component {
  render() {
    const headings = [
      'Course Name',
      'Date of publish',
      'Target Level',
      'Percentage'
    ];
    const rows = [
      [
        'Reading',
        '1-1-2019',
        2,
        '80%'
      ],
      [
        'Writting',
        '1-1-2019',
        2,
        '70%'
      ],
    ];
    return (
      <DataTable headings={headings} rows={rows} />
    );
  }
}

export default Table;