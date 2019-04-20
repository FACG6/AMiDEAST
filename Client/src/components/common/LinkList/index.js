import React from 'react';
import Link from '../Link';
import './index.css';

export default function Linklist({ links }) {
  return (
    <li className='sidebar-li-links'>
      <i className={links.fontawesome} ></i>
      {links.title}
      <ul className='sidebar-ul-li-ul'>
        {links.links.map((link, index) => {
          console.log(link.title, link.to)
          return < Link key={index} title={link.title} to={link.to} />
        }
        )}
      </ul>
    </li>
  )
}
