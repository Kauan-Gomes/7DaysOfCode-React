import styled from 'styled-components'


export const SectionBanner = styled.section`
    margin: 0 0 0 200px;
    padding: 0;
    display: flex;
    /* width: 585px; */
    gap: 30px;
    position: relative;

`

export const Newsletter = styled.div`
    display:flex;
    flex-direction: column;

    h4{
        font-size: 16px;
        font-weight: 400;
        width: 100%;
    }
    h2{
        font-family: var(--fonte-menu);
        font-weight: 900;
        font-size: 62px;
        margin: 0;
        width: 525px;
    }
    p{
        font-size: 16px;
        line-height: 29px;
        font-weight: 400;
        width: 525px;
    }

    form{
        align-items:center;
        position: relative;
        width: 525px;
    input{
        border: none;
        width: 300px;
        height:75px;
        
        text-align:initial;
        padding-left: 40px;
        font-size: 16px;
    }
    input::placeholder{
        padding-left: 10px;
    }
    img{
        position: absolute;
        color: #202020;
        height: 25px;
        justify-content: center;
        text-align:center;
        z-index:1;
        bottom: 27px;
        left: 12px;
    }
    button{
        font-size: 16px;
        background-color: var(--cor-amarela);
        color: var(--cor-branca);
        border: none;
        height:75px;
        width:170px;
    }
    }
   
`

export const Foto = styled.div`
   margin: 0;
   padding: 0;
    
    img{
        margin: -43px;
        padding: 0;
        height:620px;
    }
`




