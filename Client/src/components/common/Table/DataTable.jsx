import * as React from 'react';
import Cell from './cell';
import './table.css';

const DataTable = ({ headings, rows }) => {
  return (
    <table className="Table">
      <thead> 
        {headings.map((head,index) =>
          <Cell
          key={index}
            content={head}
            header={true} />)
        }
      </thead>
      <tbody>
        {rows.map((row,index) => {
          return (
            <tr key={index}>
              {row.map((rowcontent, index) => {
                return (
                  <Cell
                    key={index  }
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
export default DataTable;