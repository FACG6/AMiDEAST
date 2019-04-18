import React from 'react';
import Link from '../Link';
import './index.css';

const sublink = [
  ['Add Course', 'View Course'],
  ['Add Student ', 'View Student ', 'Edit Student']
];

export default function Linklst({ index, link }) {
  return (
    <>
      <li className='li-links'><i className="fas fa-home icon"></i>{link[0]}</li>
      <li className='li-links'> <i className="fas fa-certificate icon"></i>{link[1]}
        <ul className='link'>
          {sublink[0].map((link, index) => <Link key={index} link={link} />)}
        </ul>
      </li>
      <li className='li-links'> <i className="fas fa-users icon"></i>{link[2]}
        <ul className='link'>
          {sublink[1].map((link, index) => <Link key={index} link={link} />)}
        </ul>
      </li>
    </>
  )
}
