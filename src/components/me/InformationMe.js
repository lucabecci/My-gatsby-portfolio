import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import InformationMeCard from './InformationMeCard'
export default function InformationMe() {

    //COMPONENTES DE CSS
    const Main = styled.main`
        display: flex;
        justify-content: center;
        padding: 50px 0 0 0;
        height: 300px; 
        background-color: #848ccf;
    `;
    //componente para el flex de los hijos
    const Information = styled.div`
        width: 90%;
        height: 200px;
        background-color: white;
    `;
    return(
        <>
        <Main>
            <Information>
                <InformationMeCard/>
            </Information>
        </Main>
        </>
    )
}