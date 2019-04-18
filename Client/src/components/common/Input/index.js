import React from 'react';
import './index.css';

const Input = ({ id, onChange, value, name, ...rest }) =>
  <input id={id} value={value} onChange={onChange} className='input' name={name} {...rest} />;
  
export default Input;
