import React from 'react'

export default function Button(props) {
  const {content, onClick, btnClassName} = props
  return (
    <button type="submit" onClick={onClick} className={btnClassName}>{content}</button>
  )
}
