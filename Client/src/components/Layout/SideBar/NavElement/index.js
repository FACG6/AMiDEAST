import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavElement(props) {
  const {link, icon, text, handleLinkClick} = props;
  return (
    <NavLink to={link} onClick={handleLinkClick} className='SidBar-link' >
      <img src={icon} alt="icon" className='SideBar-img'/>
      {/* <i className={icon} ></i> */}
      <h3 className='SideBar-text'>{text}</h3>
    </NavLink>
  )
}
