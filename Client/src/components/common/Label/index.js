import React from 'react';
import './index.css';

const Label = props => {
  const { input: Input, id, labelText} = props;
  return (
    <label htmlFor={id} >
      {labelText}
      {<Input {...props}/>}
    </label>
  )
};

export default Label
