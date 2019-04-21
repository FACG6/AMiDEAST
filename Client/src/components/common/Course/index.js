import React from 'react'
import'./index.css'

export default function CoursCard(props) {
  const { titel, desc, date, days, time } =props
  return (
    <div className='CoursCard'>
      <h3 className='CoursCard-titel'>{titel}</h3>
      <p className='CoursCard-desc'>{desc}</p>
      {date ? <h4 className='CoursCard-time' >Start at {date}</h4> : null}
      {days ? <h4 className='CoursCard-time'>Days : {days}</h4> : null}
      {time ? <h4 className='CoursCard-time'>Time : {time}</h4> : null}
    </div>
  )
}
