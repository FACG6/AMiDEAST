import React from "react";

const Label = props => {
  const {
    input: Input,
    id,
    labelText,
    labelClassName,
    name,
    placeholder,
    onChange,
    inputClassName,
    type
  } = props;
  return (
    <label htmlFor={id} className={labelClassName}>
      {labelText}
      <Input
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        inputClassName={inputClassName}
        type={type}
      />
    </label>
  );
};

export default Label;
