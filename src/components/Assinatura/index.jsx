import React from 'react'
import styles from './Assinatura.module.css'
import planta from './plantaAssinatura.svg'
import Titulo from 'components/Titulo'
import Descricao from 'components/Descricao'
import Botao from 'components/Botao'

export default function Assinatura() {
  return (
    <div className={styles.assinatura}>
      <div>
        <h4>Sua casa com as </h4>
        <Titulo style={styles.assinatura__titulo}>melhores plantas</Titulo>
        <Descricao style={styles.assinatura__descricao}>
          Encontre aqui uma vasta seleção de Descricaolantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
        </Descricao>
        <div>
          <input className={styles.assinatura__input} type="text" placeholder='Insira seu e-mail'/>
          <Botao style={styles.assinatura__botao}>Assinar newsletter</Botao>
        </div>
      </div>
      <div>
        <img src={planta} alt="foto de uma planta" />
      </div>
    </div>
  )
}
