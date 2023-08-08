import React from 'react'

export default function Titulo({children, style}) {
  return (
    <h2 className={style}>{children}</h2>
  )
}
