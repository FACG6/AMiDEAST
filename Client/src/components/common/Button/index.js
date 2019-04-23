import React from 'react'

import './index.css'

export default function Button(props) {
  const {content, onClick, className} = props
  return (
    <button type="submit" onClick={onClick} className={'custom-btn ' + className }>{content}</button>
  )
}
