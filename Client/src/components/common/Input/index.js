import React from "react";
import "./index.css";

const Input = props => {
  const { inputClassName } = props;
  return <input {...props} className={"general-input " + inputClassName} />;
};

export default Input;
