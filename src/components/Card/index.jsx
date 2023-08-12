import React from 'react'

import Titulo from 'components/Titulo'
import seta from './seta.svg'
import planta from 'assets/ajuga01_card.png'
import Paragrafo from 'components/Paragrafo'

import { DivCard } from './styles'

export default function Card() {
    return (
        <DivCard>
            <div>
                <img src={planta} alt="" />
            </div>
            <div>
                <ul>
                    <li>
                        <Titulo>Ajuga reptans</Titulo>
                    </li>
                    <li>
                        <Paragrafo>R$ 20,00</Paragrafo>
                    </li>
                    <li>
                        <button>Comprar <img src={seta} alt="imagem deuma seta amarela" /></button>
                    </li>
                </ul>
            </div>
        </DivCard>
    )
}
