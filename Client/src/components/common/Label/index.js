import React from 'react';

const Label = props => {
  const { input: Input, id, labelText, labelClassName, name, placeholder, onChange, inputClassName, Error, type } = props;
  return (
    <label htmlFor={id} className={labelClassName} >
      {labelText}
      <Input name={name} id={id} type={type} placeholder={placeholder} onChange={onChange} inputClassName={inputClassName} />
      <br />
      <span className='error-label'>{Error}</span>
    </label>
  )
};

export default Label
