import React from 'react'
import './index.css';
function Button(props) {

    const { onClick, Name  } = props;

    return (
        <div>
      <button className='button' onClick={ onClick }>{Name}</button>
    </div>
  )
}


export default Button

