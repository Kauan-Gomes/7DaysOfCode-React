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



