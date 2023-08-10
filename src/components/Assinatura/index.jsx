import React, { useState } from 'react'

import Email from './email.svg'
import planta from './plantaAssinatura.svg'

import { SectionBanner, Newsletter, Foto } from './styles'

export default function Assinatura({ aoCadastrar }) {

  //declarando um hook de useState de String para guardar o valor do email
  const [email, setEmail] = useState('');


  //criando função ao submeter formulário
  const aoSubmeter = (evento) => {
    //tirando comportamento padrão do formulário
    evento.preventDefault();
    //exibindo valor do email que foi colocado no input
    alert(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}`)
  }

  // vai pegar o valor do input e passar para o setEmail para atualizar
  const aoAlterado = valor => setEmail(valor)

return (
  //componentes criados no styled-components para estilizar elementos por meio no css-in-js
  <SectionBanner>
    <Newsletter>
      <div>
        <h4>Sua casa com as </h4>
        <h2>melhores plantas</h2>
        <p>
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
        </p>
      </div>
      {/* Aplicando função de submeter no form */}
      <form onSubmit={aoSubmeter}>
        <img src={Email} alt="Icone de email" />
        <input
          // Usando da função "onChange" para capturar as mudanças passando o evento.target.value para o setEmail com a função aoAlterado
          onChange={evento => aoAlterado(evento.target.value)}
          valor={email}
          type="email"
          placeholder='Insira seu e-mail'
          required />
        <button>Assinar newsletter</button>
      </form>
    </Newsletter>
    <Foto>
      <img src={planta} alt="Foto de uma planta de fundo" />
    </Foto>
  </SectionBanner>


)
}
