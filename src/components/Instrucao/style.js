import styled from 'styled-components'





export const Bola = styled.div`
    height: 52px;
    width: 52px;
    background-color: var(--cor-amarela);
    border-radius: 100%;
    
`

export const SectionCard = styled.section`
    width: 59%;
    display:flex;
    justify-content:center;
    margin-top: 2%;
    height:auto;
    gap: 60px;
    box-shadow: 1px 1px 1px 1px #202020;
    
    
    
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
        margin: 0 0 40px 0;
    }

    ul{
        display:flex;
        flex-direction: column;
        height: 52px;
        
        li{
            padding: 0;
            display:flex;
            align-items: center;
            h4 {
                
            }
        }

    }


`



