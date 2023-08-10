import React from 'react'

import { LinkMenu } from './styles'

export default function MenuLink({ children }) {
  return (
    <LinkMenu>
      <li>
        <a href="#">{children}</a>
      </li>
    </LinkMenu>

  )
}
