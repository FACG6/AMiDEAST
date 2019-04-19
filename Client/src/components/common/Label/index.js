import React from 'react';

const Label = props => {
  const { input: Input, id, labelText, labelClassName} = props;
  return (
    <label htmlFor={id} className={labelClassName} >
      {labelText}
      {<Input {...props}/>}
    </label>
  )
};

export default Label
