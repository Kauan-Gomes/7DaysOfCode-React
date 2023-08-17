
import Assinatura from 'components/Assinatura'
import Instrucao from 'components/Instrucao'
import Menu from 'components/Menu'
import Ofertas from 'components/Ofertas'
import { useEffect, useState } from 'react'


export default function Home() {
    const [planta, setPlanta] = useState([])

    useEffect(() => {
        fetch('https://gist.githubusercontent.com/lucianosants/cd3c8761fad5d441185cfa7365553e4b/raw/')
            .then(resposta => resposta.json())
            .then(dados => {
                setPlanta(dados)

            })
    },[])
   


    return (
        <>
            <Menu />
            <main>
                <section>
                    <Assinatura />
                    <Instrucao/>
                    <Ofertas
                    catalogo={planta}
                    />
                </section>
            </main>
        </>
    )
}
