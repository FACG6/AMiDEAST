import React from 'react';
import { Link } from 'react-router-dom';

import './index.css'

export default function link({ title, to }) {
  return (to ?
    <Link to={to}>
      <li className='sidebar-sublink'> {title} </li>
    </Link  >
    :
    <li className='sidebar-sublink'> {title} </li>
  )
};
