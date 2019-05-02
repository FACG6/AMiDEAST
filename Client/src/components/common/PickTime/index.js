import React from 'react'
import './index.css';

function PickerTime(props) {
  const { option, handleChange, datesId } = props
  return (
    <select className='picker' onChange={handleChange} value={datesId}>
      {option.map((obj) => (
        <option key={obj.id} value={obj.id}>{`${obj.days} from ${obj.h_from} to ${obj.h_to}`}</option>
      ))}
    </select>
  );
}
export default PickerTime
