import React, { Component } from 'react';

import Linklist from '../LinkList';
import data from './staticdata';
import './index.css';

export default class Sidebar extends Component {
  state={
    linklist:data.linklist
  }
 render(){
   const {linklist} = this.state;
  return (
    <div className='sidebar'>
      <img src='https://i.imgur.com/m6QdXqO.png' alt='AMDIEAST logo' className='sidebar-desktop-logo' width='200px' />
      <h3 className='sidebar-title' >AMIDEAST EL</h3>
      <hr className='sidebar-hr' />
      <br />
      <ul className='sidebar-linklist'>
        {linklist.map((linklist, index) => <Linklist key={index} links={linklist} {...this.props}/>)}
      </ul>
    </div>
  )
 }
}

Sidebar.defaultProps = data;
