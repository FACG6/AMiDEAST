import React from 'react'

import'./index.css'

export default function CourseCard (props) {
  const { title, desc } = props
  return (
    <div className='course-card'>
      <h3 className='course-card-title'>{title}</h3>
      <p className='course-card-description'>{desc}</p>
    </div>
  )
}
