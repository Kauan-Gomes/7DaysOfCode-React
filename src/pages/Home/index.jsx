import Planta from 'BuscaApi'
import Assinatura from 'components/Assinatura'
import Instrucao from 'components/Instrucao'
import Menu from 'components/Menu'
import Ofertas from 'components/Ofertas'


export default function Home() {



    return (
        <>
            <Menu />
            <main>
                <section>
                    <Assinatura />
                    <Instrucao/>
                    <Ofertas/>
                    <Planta/>
                </section>
            </main>
        </>
    )
}
