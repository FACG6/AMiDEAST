import React from 'react'

import'./index.css'

export default function CoursCard (props) {
  const { titel, desc } = props
  return (
    <div className='courscard'>
      <h3 className='course-card-title'>{titel}</h3>
      <p className='course-card-descriptio'>{desc}</p>
    </div>
  )
}
