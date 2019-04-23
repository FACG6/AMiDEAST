import React from 'react'

import'./index.css'

export default function CoursCard(props) {
  const { title, desc, date, days, time } =props
  return (
    <div className='course-card'>
      <h3 className='course-card-title'>{title}</h3>
      <p className='course-card-description'>{desc}</p>
      {date ? <h4 className='course-card-time' >Start at {date}</h4> : null}
      {days ? <h4 className='course-card-time'>Days : {days}</h4> : null}
      {time ? <h4 className='course-card-time'>Time : {time}</h4> : null}
    </div>
  )
}
