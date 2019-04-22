import React from "react";
import "./style.css";

function DatePicker({ days, handelonclick }) {
  return (
    <select className="select" onChange={handelonclick}>
      {days.map(day => (
        <option>{day}</option>
      ))}
    </select>
  );
}

export default DatePicker;
