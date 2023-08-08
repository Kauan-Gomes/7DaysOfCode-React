import React from 'react'

export default function Botao({children, style}) {
  return (
    <button className={style}>
        {children}
    </button>
  )
}
