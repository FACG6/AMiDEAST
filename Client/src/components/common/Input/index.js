import React from 'react';
import './index.css';

const Input = props => {
  const {name, placeholder, id, onChange} = props
  return (
    <input name={name} placeholder={placeholder} id={id} onChange={onChange} />
  )
};

export default Input
