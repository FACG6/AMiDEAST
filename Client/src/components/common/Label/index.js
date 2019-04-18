import React from "react";
import "./index.css";
function Label(props) {
  return (
    <label htmlFor={props.id} id={props.id} className="label">
      {props.labelText}
    </label>
  );
}

export default Label;
