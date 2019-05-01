import React from 'react';
import { Link } from 'react-router-dom';

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
