import React from 'react'

import './index.css'

export default function CourseCard(props) {
  const { title, description, publish_date, days, h_from, h_to } =props
  return (
    <div className='course-card'>
      <h3 className='course-card-title'>{title}</h3>
      <p className='course-card-description'>{description}</p>
      {h_from && h_to ? <h4 className='course-card-time' >Time {`${h_from} to  ${h_to}`}</h4> : null}
      {days ? <h4 className='course-card-time'>Days : {days}</h4> : null}
      {publish_date ? <h4 className='course-card-time'>Start at : {publish_date}</h4> : null}
    </div>
  )
}
