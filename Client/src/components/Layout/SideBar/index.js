import React, { Component } from 'react'

import NavElement from './NavElement'
import elements from './staticData';
import './index.css'

export default class SideBar extends Component {
  
  state = {
    studentName: 'Abdallah Ammar'
  }

  render() {
    const {menuOpen, handleLinkClick} = this.props;
    const { studentName } = this.state;

    if (menuOpen) {
      return (
        <div className='SideBar'>
          <div className='SideBar-name'>{studentName}</div>
          <div>
            {elements.map(item =>
              <span key={item.id}>
                <NavElement link={item.link} text={item.text} icon={item.icon} handleLinkClick={handleLinkClick} />
              </span>          
            )}
          </div>
        </div>
      )
    } else {
      return (
        null
      )
    }
  }
}
