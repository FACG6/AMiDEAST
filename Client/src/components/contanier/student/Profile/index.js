import React, { Component } from 'react'
import TextCard from '../../../common/TextCard'
import './index.css';

export default class Profile extends Component {
  state = {
    level: 6,
    data: ['Abdallah Amamr', '0597185554', '59763']
  }

  render() {
    const label = ['Name : ', 'Phone Number : ', 'Amideast ID : ']
    const { data } = this.state
    return (
      <div className='profile'>
        <h2 className='profile-titel'>Profile</h2>
        <h3 className='profile-level' >Level {this.state.level}</h3>
        {label.map((item, index) => {
          return (
            <TextCard data={data[index]} label={item} key={index} />
          )
        })}
      </div>
    )
  }
}
