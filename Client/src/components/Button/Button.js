import React, { Component } from 'react'
import './Button.css';

const  Button = () => {
        return (
      <div>
            <button className={this.props.btn-classname } onClick ={this.props.handlevent }>{this.props.btn-value}</button>
      </div>
    )
  
}
export default Button;
