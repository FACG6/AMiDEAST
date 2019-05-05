import React, { Component } from 'react';
import Link from '../Link';

import './index.css';

export default class Linklist extends Component {

  render() {
    const { links } = this.props;
    return (
      <li className='sidebar-li-links' >
        <i className={links.fontawesome} ></i>
        {links.title === 'logout' ?
          <a
            className='sidebar-logout'
            onClick={(e) => links.handleLogout(e, this.props)}
          >
            {links.title}
          </a> :
          links.title
        }

        <ul className='sidebar-ul-li-ul'>
          {links.links.map(({ title, to }, index) =>
            <Link key={index} title={title} to={to} />)
          }
        </ul>
      </li >
    )
  }
}
