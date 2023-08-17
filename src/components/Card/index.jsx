import React from 'react'

import Titulo from 'components/Titulo'
import seta from './seta.svg'
import Paragrafo from 'components/Paragrafo'
import { DivCard, Seta } from './styles'

export default function Card({name, price, img, ordem}) {

    
    return (
        <DivCard>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <ul>
                    <li>
                        <Titulo>{name}</Titulo>
                    </li>
                    <li>
                        <Paragrafo>R$ {price}</Paragrafo>
                    </li>
                    <li>
                        <Seta>Comprar <img src={seta} alt="imagem de uma seta amarela" /></Seta>
                    </li>
                </ul>
            </div>
        </DivCard>
    )
}
