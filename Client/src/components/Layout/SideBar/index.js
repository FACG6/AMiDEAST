import React, { Component } from 'react'
import NavElement from './NavElement'
import logout from '../../assets/Image/logout.png'
import course from '../../assets/Image/translator.png'
import profile from '../../assets/Image/curriculum.png'
import './index.css'

export default class SideBar extends Component {
  state = {
    studentName: 'Abdallah Ammar'
  }
  render() {
    const {menuOpen, handleLinkClick} = this.props;
    const { studentName } = this.state;
    const elements = [
      {
        id:0,
        text: 'Profile',
        link: 'profile',
        icon: profile,
      },
      {
        id:1,
        text: 'All Courses',
        link: 'courses',
        icon: course,
      },
      {
        id:2,
        text: 'Logout',
        link: 'logout',
        icon: logout,
      }
    ]
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
