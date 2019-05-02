import React from 'react'

import './index.css'

export default function Button(props) {
  const {content, onClick, className, id} = props
  return (
    <button type="submit" id={id} onClick={onClick} className={'custom-btn ' + className }>{content}</button>
  )
}
