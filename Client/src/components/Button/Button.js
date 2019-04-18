import React, { Component } from 'react'
import './Button.css';
 
export default class Button extends Component {
  render() {
    
    this.state = {
      'Fn' : () => { console.log('moammed')} ,
      classname: 'mohammed',
      'Name':'Click Me',
    }
    return (
      <div>
            <button className={this.state.classname } onClick={this.state.Fn}>{this.state.Name}</button>
      </div>
    )
  }
}
