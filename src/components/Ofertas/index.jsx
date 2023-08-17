
import Paragrafo from 'components/Paragrafo'
import Titulo from 'components/Titulo'
import React from 'react'
import { Secao, SecaoCard } from './styles'
import Card from 'components/Card'

export default function Ofertas({catalogo}) {
  console.log(catalogo)
  return (
    
    <Secao>
        <Paragrafo><h4>Conheça nossas</h4></Paragrafo>
        <Titulo>Ofertas</Titulo>
        <SecaoCard>
        {catalogo.map((card) => {
          return <Card 
          {...card} 
          key={card.name}
          />
        })
        }
        </SecaoCard>
    </Secao>
  )
  
}


