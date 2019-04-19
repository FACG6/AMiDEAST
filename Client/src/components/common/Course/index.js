import React from 'react'
import'./index.css'

export default function CoursCard(props) {
  const { titel, desc } =props
  return (
    <div className='CoursCard'>
      <h3 className='CoursCard-titel'>{titel}</h3>
      <p className='CoursCard-desc'>{desc}</p>
    </div>
  )
}
