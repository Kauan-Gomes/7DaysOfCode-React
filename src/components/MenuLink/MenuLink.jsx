import React from 'react'

import { LinkMenu } from './styles'

export default function MenuLink({barra, children }) {
  return (
    <LinkMenu>
      <li>
        {barra}
        <a href="#"> {children}</a>
      </li>
    </LinkMenu>

  )
}
