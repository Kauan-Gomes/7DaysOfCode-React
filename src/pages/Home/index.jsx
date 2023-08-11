import Assinatura from 'components/Assinatura'
import Instrucao from 'components/Instrucao'
import Menu from 'components/Menu'


export default function Home() {



    return (
        <>
            <Menu />
            <main>
                <section>
                    <Assinatura />
                    <Instrucao/>
                </section>
            </main>
        </>
    )
}
