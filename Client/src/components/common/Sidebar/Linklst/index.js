import React from 'react';
import Link from '../Link/index';
import './index.css'
const sublink = [
  ['Add Course', 'View Course'],
  ['Add Student ', 'View Student ', 'Edit Student']
];
export default function Linklst({ index, link }) {
  return (
    <>
      <li className='li-links'>   <i class="fas fa-home-lg"></i> {link[0]}</li>
      <li className='li-links'> <i class="fas fa-file-certificate"></i> {link[1]}
        <ul className='link'>
          {sublink[0].map((link, index) => <Link key={index} link={link} />)}
        </ul>
      </li>
      <li className='li-links'> <i class="far fa-users"></i>{link[2]}
        <ul className='link'>
          {sublink[1].map((link, index) => <Link key={index} link={link} />)}
        </ul>
      </li>
    </>
  )
}
