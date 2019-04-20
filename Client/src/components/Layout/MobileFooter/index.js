import React from 'react';
import facebook from '../../assets/Image/facebook.png';
import instagram from '../../assets/Image/instagram.png';
import twitter from '../../assets/Image/twitter.png';
import './index.css';

export default function Footer() {
  return (
    <div className='Footer'>
      <img src={facebook} alt="facebook img" className='Footer-img' />
      <img src={instagram} alt="instagram img" className='Footer-img' />
      <img src={twitter} alt="twitter img" className='Footer-img' />
    </div>
  )
}
