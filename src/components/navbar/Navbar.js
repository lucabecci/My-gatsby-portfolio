import React from 'react'
import { Link } from 'gatsby';
import styled from 'styled-components'


function Navbar ({firstNavigation, secondNavigation, firstLink, secondLink}) {
    //estilo del componente de navigacion
    const Navigation = styled.nav`
        display: flex;
        height: 40px;
        justify-content: space-between;   
        padding-bottom: 10px;     
        width: 100%;
    `;
    //estilo del titulo de la navigacion
    const Title = styled.h4`
        color: #3c2c3e;
        font-weight: 400;
        font-size: 30px;
        padding: 2px 5px 0 0 ;
        margin: 5px 0px 0 10px;
        letter-spacing: 2.5px;
        @media (max-width: 768px) {
            font-size: 25px;
            letter-spacing: 0px;
            padding: 5px 10px 0 0;
        }
    `;
    //estilo de los links de la navegacion
    const Links = styled.div`
        display: flex;
        margin-top: 10px;
        padding: 7px 15px 0 0;
        .link{
            color: #3c2c3e;
            font-size: 20px;          
            font-weight: 300;
            margin: 10px;
            text-decoration: none;
        }
        @media (max-width: 768px) {
            padding: 6px 5px 0 0;
            .link{
                font-size: 18px
            }
        }
    `;

    
    return (
        <>
        <Navigation>
            <Title>Luca Portfolio</Title>
            <Links>
                <h5><Link to={firstLink} className='link'>{firstNavigation}</Link></h5>
                <h5><Link to={secondLink} className='link'>{secondNavigation}</Link></h5>
            </Links>
        </Navigation>      
        </>
    )
}

export default Navbar
