import React from 'react'
import styles from'./Menu.module.css'
import Logo from '../Logo'
import MenuLink from '../MenuLink/MenuLink'

export default function Menu() {
  return (
    <nav className={styles.navMenu}>
        <Logo/>
        <ul className={styles.linkMenu}>
            <MenuLink>Como Fazer</MenuLink>
            <MenuLink><span>/</span>Ofertas</MenuLink>
            <MenuLink><span>/</span>Depoimentos</MenuLink>
            <MenuLink><span>/</span>Vídeos</MenuLink>
            <MenuLink><span>/</span>Meu Carrinho</MenuLink>
        </ul>
        
    </nav>
  )
}
