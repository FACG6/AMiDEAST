import React from 'react';
import { Link } from 'react-router-dom';

import './index.css'

export default function SubLink({ title, to }) {
  return (to ?
    <Link  className='sidebar-linklist-link'to={to}>
      <li className='sidebar-sublink'> {title} </li>
    </Link  >
    :
    <li className='sidebar-sublink'> {title} </li>
  )
};
