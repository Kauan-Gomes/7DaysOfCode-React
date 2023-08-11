import styled from 'styled-components'

export const Bola = styled.div`
    height: 52px;
    width: 52px;
    background-color: var(--cor-amarela);
    border-radius: 100%;
`

export const SectionCard = styled.section`
    width: 940px;
    height: 340px;
    display: flex;
    margin: 38px 0 0 300px;
    box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.2);
    gap:30px;

    h2{
       font-size: 42px;
       padding: 0;
       margin: 0 0 20px 0;

    }
    h4{
        font-size: 18px;
        padding: 0;
        margin: 0;
    }
`

export const Topico = styled.div`
    width: 44%;
    padding-top: 40px;
    
    ul{
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 15px;
        
        li{
            display: flex;
            gap: 20px;
            align-items: center;
            padding: 0;
        }

    }
`

export const Imagem = styled.div`
    width: 60%;

`



