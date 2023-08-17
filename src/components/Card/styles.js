import styled from 'styled-components'

export const DivCard = styled.div`
    display: flex;
    height: 200px;
    width: 380px;
    box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.2);
    justify-content: space-around;
    margin-bottom: 50px;

    img{
        height:100%;
        width: 100%;
    }

    h2{
        font-size: 32px;
    }
    
    

    ul{
        display: flex;
        flex-direction: column;
        gap: 20PX;
        li{
            list-style: none;
            padding-left: 0;

            button {
                background: transparent;
                color: var(--cor-amarela);
                border: none;
                width: 140px;
                font-size: 16px;
                padding-left: 0;
                margin-left: 0;

                img{
                    margin-left: 20px;
                }
            }
            
        }
        
        
    }


`

export const Seta = styled.button`

img{
    width: 22px;
}
        
`