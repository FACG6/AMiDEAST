import React from 'react'

export default function Button(props) {
  const {content, onClickFunc, btnClassName} = props
  return (
    <button type="submit" onClick={onClickFunc} className={btnClassName}>{content}</button>
  )
}
