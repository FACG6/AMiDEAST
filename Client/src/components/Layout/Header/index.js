import React from 'react'
import logo from '../../assets/Image/logoamdieast.png'
import './index.css'

export default function Header(props) {
  const { handleMenuClick } = props;
  return (
    <div className='Header'>
      <i className="fas fa-bars Header-hambrger" onClick={handleMenuClick}></i>
      <img src={logo} alt="Amideast Logo" className='Header-img' />
    </div>
  )
}
