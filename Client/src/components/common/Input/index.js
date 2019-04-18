import React from 'react';
import './index.css';

const Input = props => {
  const {name, placeholder, id} = props
  return (
    <input name={name} placeholder={placeholder} id={id} />
  )
};

export default Input
