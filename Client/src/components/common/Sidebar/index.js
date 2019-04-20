import React from 'react';
import './index.css'
import Linklist from '../LinkList';


export default function Sidebar({ linklist }) {
  return (
    <div className='sidebar'>
      <img src='https://i.imgur.com/m6QdXqO.png' alt='AMDIEAST logo' className='sidebar-desktop-logo' width='200px' />
      <h3 className='sidebar-title' >AMIDEAST EL</h3>
      <hr className='sidebar-hr' />
      <br />
      <ul className='sidebar-linklist'>
        {linklist.map((linklist, index) => <Linklist key={index} links={linklist} />)}
      </ul>
    </div>
  )
}

Sidebar.defaultProps = {
  linklist: [
    {
      fontawesome: 'fas fa-home sidebar-icon',
      title: 'Home',
      links: []
    },
    {
      fontawesome: 'fas fa-certificate sidebar-icon',
      title: 'Courses',
      links: [
        { title: 'Add Course', to: '/add-course' },
        { title: 'view Course', to: '/view-course' }
      ]
    },
    {
      fontawesome: 'fas fa-users sidebar-icon',
      title: 'Student',
      links: [
        { title: 'Add student', to: '/add-student' },
        { title: 'view Student', to: '/view-student' },
        { title: 'Edit Student', to: '/Edit-student' }
      ]
    }
  ]
};
