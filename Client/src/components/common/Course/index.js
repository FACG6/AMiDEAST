import React from 'react'
import'./index.css'

export default function CoursCard(props) {
  const { titel, desc } =props
  return (
    <div className='coursCard'>
      <h3 className='coursCard-titel'>{titel}</h3>
      <p className='coursCard-desc'>{desc}</p>
    </div>
  )
}
