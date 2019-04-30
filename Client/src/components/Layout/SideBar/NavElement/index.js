import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, NavLink } from "react-router-dom";

export default function NavElement(props) {
  const { link, icon, text, handleLinkClick } = props;
  return (
    link
      ?
      (
        <NavLink to={link} onClick={handleLinkClick} className='SidBar-link' >
          <img src={icon} alt="icon" className='SideBar-img' />
          <h3 className='SideBar-text'>{text}</h3>
        </NavLink>)
      :
      // (
        // <NavLink to={'/login'} onClick={handleLinkClick} className='SidBar-link' >
        //   <img src={icon} alt="icon" className='SideBar-img' />
        //   <h3 className='SideBar-text'>{text}</h3>
        // </NavLink>)


      (<a  className='SidBar-link' onClick={(e) => handleLinkClick(e, props)}> 
        <img src={icon} alt="icon" className='SideBar-img' />
        <h3 className='SideBar-text'>{text}</h3>
      </a>)
  )
}
