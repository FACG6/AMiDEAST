import React from 'react';

const Input = props => {
  const {name, placeholder, id, onChange, inputClassName} = props
  return (
    <input name={name} placeholder={placeholder} id={id} onChange={onChange} className={inputClassName}/>
  )
};

export default Input
