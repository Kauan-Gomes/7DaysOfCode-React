import React from 'react'

import logo from './logo.png'
import MenuLink from '../MenuLink/MenuLink'

import { Nav } from './styles'

export default function Menu() {
  return (
    <Nav >
      <div>
        <img src={logo} alt="logo da Casa verde" />
      </div>
      <ul>
        <MenuLink barra="">Como Fazer</MenuLink>
        <MenuLink barra="/">Ofertas</MenuLink>
        <MenuLink barra="/">Depoimentos</MenuLink>
        <MenuLink barra="/">Vídeos</MenuLink>
        <MenuLink barra="/">Meu Carrinho</MenuLink>
      </ul>

    </Nav>
  )
}
