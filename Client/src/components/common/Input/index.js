import React from 'react';

const Input = props => {
  const {inputClassName} = props
  return (
    <input {...props} className={inputClassName}/>
  )
};

export default Input
