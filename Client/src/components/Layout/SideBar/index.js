import React, { Component } from 'react'

import NavElement from './NavElement'
import elements from './staticData';
import './index.css'

export default class SideBar extends Component {

  state = {
    studentName: ''
  }

  render() {
    const { menuOpen, handleLinkClick } = this.props;
    const { studentName } = this.state;
    
    if (menuOpen) {
      return (
        <div className='SideBar'>
          <div className='SideBar-name'>{studentName}</div>
          <div>
            {elements.map(item =>
              <span key={item.id}>
                {(item.text !== 'Logout') ? (
                  <NavElement link={item.link} text={item.text} icon={item.icon}
                    handleLinkClick={handleLinkClick} />
                ) : (
                    <NavElement text={item.text} icon={item.icon}
                      handleLinkClick={(e) => item.handleLogout(e, this.props)} />
                  )}
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
