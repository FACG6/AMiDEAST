import React from "react";
import "./index.css";

const Input = props => {
  const { name, placeholder, inputClassName, type } = props;
  return (
    <input
      {...props}
      className={"general-input " + inputClassName}
      name={name}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Input;
