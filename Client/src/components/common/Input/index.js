import React from 'react';
import './index.css';

const Input = props => {
  const { className } = props;
  return (
    <input {...props} className={'general-input ' + className} />
  )
};

export default Input
