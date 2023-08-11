import styled from 'styled-components'

export const Bola = styled.div`
    height: 52px;
    width: 52px;
    background-color: var(--cor-amarela);
    border-radius: 100%;
`

export const SectionCard = styled.section`
    width: 995px;
    display:flex;
    justify-content:center;
    margin-top: 2%;
    height:auto;
    gap: 60px;
    box-shadow: 1px 1px 1px 1px #202020;
    padding: 0;
    img{

    }
    
`

export const Topico = styled.div`
    
    height:440px;
    margin: 0;
    padding: 0;

    h4{
        color: #202020;
        font-family: var(--fonte-principal);
        font-size: 22px;
        font-weight: 400;
        margin: 40px 0 0 0;
        opacity: 0.5;
    }
    
    h2{
        color: #202020;
        font-family: var(--fonte-menu);
        font-size: 42px;
        font-style: normal;
        font-weight: 900;
        line-height: normal;
        margin: 0;
    }

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
            gap: 10px;
            h4 {
                margin: 0 0 0 0;
            }
            padding: 0;
        }

    }
`

export const Imagem = styled.div`
    width: 60%;

`



