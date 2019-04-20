import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';

export default function link({ title, to }) {
  console.log(title)
  return (to ?
    <Link to={to}>
      <li className='sidebar-sublink'> {title} </li>
    </Link  >
    :
    <li className='sidebar-sublink'> {title} </li>
  )
};
