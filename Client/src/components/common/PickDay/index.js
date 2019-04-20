import React from "react";
import "./index.css";

function Picker(props) {
  const { option } = props 
  return (
    <select className="picker">
      {option.map((day, index) => (
        <option key={index} >{day}</option>
      ))}
    </select>
  );
}
export default Picker;
