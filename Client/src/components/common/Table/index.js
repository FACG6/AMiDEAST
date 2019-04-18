import * as React from 'react';
import Cell from './cell';
import './index.css';


const Table = ({ headings, rows }) => {
  return (
    <table className="Table">
      <thead className='table-head'>
        {headings.map((head, index) =>
          <Cell
            key={index}
            content={head}
            header={true}
          />)
        }
      </thead>
      <tbody>
        {rows.map((row, index) => {
          return (
            <tr className='table-row' key={index}>
              {row.map((rowcontent, index) => {
                return (
                  <Cell
                    key={index}
                    content={rowcontent}
                  />
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

Table.defaultProps = {
  headings: ['Title 1',
    'Title 2',
    'Title 3',
    'Title 4',
    ''],
  rows: [
    [
      'Reading',
      '1-1-2019',
      2,
      '80%',
      <i className="fas fa-calendar-times icon"></i>
    ],
    [
      'Writting',
      '1-1-2019',
      2,
      '70%',
      <i className="fas fa-calendar-times icon"></i>
    ],
  ]
}

export default Table;
