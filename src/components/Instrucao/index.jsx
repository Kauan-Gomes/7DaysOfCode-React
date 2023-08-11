import planta from './planta-instrucao.png'
import { Bola, SectionCard, Topico } from './style'


export default function Instrucao() {
    return (
        <SectionCard>
            <div>
                <img src={planta} alt="foto de uma planta costela de adão" />
            </div>
            <Topico>
                <h4>Como conseguir</h4>
                <h2>minha planta</h2>
                <ul>
                    <li>
                        <Bola />
                        <h4>Escolha suas plantas</h4>
                    </li>
                    <li>
                        <Bola />
                        <h4>Faça seu pedido</h4>
                    </li>
                    <li>
                        <Bola />
                        <h4>Aguarde na sua casa</h4>
                    </li>
                </ul>

            </Topico>
        </SectionCard>
    )
}