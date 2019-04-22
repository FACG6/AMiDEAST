import React from 'react';
import Cell from './cell';
import './index.css';


const Table = ({ headings, rows }) => {
  return (
    <table className="table">
      <thead className='table-head'>
        <tr>
          {headings.map((head, index) =>
            <Cell
              key={index}
              content={head}
              header={true}
            />
          )}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => {
          return (
            <tr className='table-row' key={index}>
              {row.map((rowcontent, index) =>
                <Cell
                  key={index}
                  content={rowcontent}
                />
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default Table;
