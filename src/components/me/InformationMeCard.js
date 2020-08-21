import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
export default function InformationMeCard() {
    //State para guardar la info de la API
    const [information, setInformation] = useState({})
    //Effect para que se vuelva a llamar a la API cada vez que esta cambie
    useEffect(() => {
        axios.get('https://my-portfolio-luca.herokuapp.com/about')
          .then(
          res => setInformation(res.data[0])
          )
    }, [setInformation])
    console.log(information)

    //COMPONENTES DE CSS
    const Information = styled.div`
        width: 90%;
        height: 200px;
        background-color: white;
    `;
    return(
        <>
            <Information>
                <h2>{information.name}</h2>
            </Information>
        </>
    )
}