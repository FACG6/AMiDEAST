import React, { Component } from 'react'
import TextCard from '../../../common/TextCard'
import './index.css';

export default class Profile extends Component {
  state = {
    level: 6,
  }

  render() {
    const label = ['Name :', 'Phone Number :', 'Amideast ID :']
    const data = ['Abdallah Amamr', '0597185554', '59763']
    return (
      <div className='profile'>
        <h1 className='profile-titel'>Profile</h1>
        <h2 className='profile-level' >Level {this.state.level}</h2>
        {label.map((item, index) => {
          return (
            <TextCard data={data[index]} label={item} key={index} />
          )
        })}
      </div>
    )
  }
}
