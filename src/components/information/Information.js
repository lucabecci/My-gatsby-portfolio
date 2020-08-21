import React from 'react'
import styled from 'styled-components'


export default function Information ({firstInformation, secondInformation, wordSpan}){
    //componente de todo el contenedor
    const Main = styled.main`
        display: flex;
        justify-content: center;
        padding: 80px 0 0 0;
        height: 300px;
        @media (max-width: 768px) {
            height: 250px;         
        } 
    `;
    //componente para el flex de los hijos
    const Information = styled.div`
        display:flex;
        flex-direction: column;
    `;
    //componente del titulo 
    const InformationTitle = styled.h3`
        font-size: 50px;
        font-weight: 700;
        margin-bottom: 10px;
        text-align: center;
        @media (max-width: 768px) {
            font-size: 35px;
        }
    `;
    //componente para el color de la prop pasada por index
    const InformationSpan = styled.span`
        color: #848ccf;
    `;
    //componente de la descrip
    const InformationParagraph = styled.p`
        font-size: 25px;
        font-weight: 500;
        text-align: center;
        @media (max-width: 768px) {
            font-size: 22px;         
        }
    `;

    return(
        <>
        <Main>
        <Information>
            <InformationTitle>{firstInformation}<InformationSpan>{wordSpan}</InformationSpan></InformationTitle>
            <InformationParagraph>{secondInformation}</InformationParagraph>
        </Information>
        </Main>
        </>
    )
}