import React from 'react';

export default function Cell({ content, header }) {
  return (header ? (
    <th className='table-cell table-cell-header'>
      {content}
    </th>
  ) : (
      <td className='table-cell'>
        {content}
      </td>
    )
  );
}
