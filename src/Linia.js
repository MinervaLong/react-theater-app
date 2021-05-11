import React from 'react' 
import styled from 'styled-components';

const Text = styled.p`
    color: #FFFFFF;
    font-weight: bold;
    font-size: 17pt;
    font-style:italic;
    margin:0;
`

const Linia = (props) => {
    return(
        <Text>{props.phrase}</Text>
    )
}

export default Linia;