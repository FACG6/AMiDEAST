import React from 'react';
import Link from '../Link';
import './index.css';

export default function Linklist({ links }) {
  return (
    <li className='sidebar-li-links'>
      <i className={links.fontawesomeClass} ></i>
      {links.title}
      <ul className='sidebar-ul-li-ul'>
        {links.links.map((link, index) =>
          <Link key={index} link={link} />
        )}
      </ul>
    </li>
  )
}
