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
        <MenuLink>Como Fazer</MenuLink>
        <MenuLink><span>/</span>Ofertas</MenuLink>
        <MenuLink><span>/</span>Depoimentos</MenuLink>
        <MenuLink><span>/</span>Vídeos</MenuLink>
        <MenuLink><span>/</span>Meu Carrinho</MenuLink>
      </ul>

    </Nav>
  )
}
