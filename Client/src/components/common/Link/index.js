import React from 'react'
import './index.css';

function Link(props) {
    const {  name ,List } = props;

  return List.map((listitem) => (
      <div className={listitem[0]}>
        <li className='listitem'><i className={listitem[1]}></i> {listitem[0]}</li>
      </div>
      ))
  }




export default Link;


