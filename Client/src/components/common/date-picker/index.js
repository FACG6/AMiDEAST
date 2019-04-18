import React from "react";
import "./style.css";
const days = ["Sat-Mon-Wedn", "Sun-Tues-Thurs"];
function DatePicker() {
  return (
    <select className="select">
      {days.map(day => (
        <option>{day}</option>
      ))}
    </select>
  );
}
export default DatePicker;
