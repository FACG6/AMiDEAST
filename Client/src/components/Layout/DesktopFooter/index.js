import React from 'react'
import './index.css';

export default function FooterDescktop() {
  return (
    <div className='desktop-footer'>
      <p className='desktop-footer-text'>AMIDEAST EL <span className='desktop-footer-copyright'> ©  {new Date().getFullYear()}</span></p>
    </div>
  )
}
