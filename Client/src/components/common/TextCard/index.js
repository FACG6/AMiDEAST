import React from 'react'
import './index.css'

export default function TextCard(props) {
  const {label, data} = props;
  return (
    <div className='textcard'>
      <h4 className='textcard-label'>{label}</h4>
      <h2 className='textcard-data'>{data}</h2>
    </div>
  )
}
