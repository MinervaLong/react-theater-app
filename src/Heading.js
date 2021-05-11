import React from 'react'
import styled from 'styled-components';

const Title = styled.h1`
    color: #1f2022;
    font-weight: bold;
    font-size:35pt;
    text-align:center;

    @media (max-width: 800px){
        font-size:25pt;
    }
`

const Heading = () =>  {
    return(
        <Title>Romeo and Juliet</Title>
    )
}

export default Heading;