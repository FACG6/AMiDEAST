import React from 'react';
import './index.css'
import Linklst from './Linklst/index';
const links = [[['Home'],['Course'], ['Student']]];

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <img src='https://i.imgur.com/m6QdXqO.png' alt='AMDIEAST logo' className='img' width='200px' />
      <h3 className='title' >AMIDEAST EL</h3>
      <hr className='hr' />
      <br />
      <ul className='linklst'>
        {links.map((link, index) => <Linklst key={index} link={link} />)}
      </ul>
    </div>
  )
}
