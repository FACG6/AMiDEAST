import React from 'react';
function Label(props){
return(
    <label htmlFor = {props.id} id={props.id}>
    {props.labelText}
  </label>
);
}
export default Label ;