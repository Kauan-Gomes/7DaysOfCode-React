import React from 'react'

export default function Descricao({children, style}) {
  return (
    <p className={style}>{children}</p>
  )
}
