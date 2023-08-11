import Paragrafo from 'components/Paragrafo'
import planta from './planta-instrucao.png'
import { Bola, SectionCard, Topico, Imagem } from './style'
import Titulo from 'components/Titulo'


export default function Instrucao() {
    return (
        <SectionCard>
            
            <Imagem>
                <img src={planta}  width='100%' height='100%' alt="foto de uma planta costela de adão" />
            </Imagem>
            <Topico>
                <Paragrafo><h4>Como conseguir</h4></Paragrafo>
                <Titulo><h2>minha planta</h2></Titulo>
                <ul>
                    <li>
                        <Bola />
                        <Paragrafo><h4>Escolha suas plantas</h4></Paragrafo>
                    </li>
                    <li>
                        <Bola />
                        <Paragrafo><h4>Faça seu pedido</h4></Paragrafo>
                    </li>
                    <li>
                        <Bola />
                        <Paragrafo><h4>Aguarde na sua casa</h4></Paragrafo>
                    </li>
                </ul>

            </Topico>
        </SectionCard>
    )
}