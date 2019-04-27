import React from 'react';

const Label = props => {
  const { input: Input, id, labelText, labelClassName, name, value, placeholder, onChange, inputClassName, Error, type } = props;
  return (
    <label htmlFor={id} className={labelClassName} >
      {labelText}
      <Input name={name} id={id} value={value} type={type} placeholder={placeholder} onChange={onChange} className={inputClassName} />
      <br />
      <span className='error-label'>{Error}</span>
    </label>
  )
};

export default Label
