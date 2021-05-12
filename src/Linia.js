import React from 'react' 
import styled, {css} from 'styled-components';

const Text = styled.p`
    color: #FFFFFF;
    font-weight: bold;
    font-size: 17pt;
    font-style:italic;
    margin:0;

    ${props => props.primary &&
        css`
            text-decoration: underline black;
        `
    }  
`;

const Linia = (props) => {
    return(
        <Text >{props.phrase}</Text>
    )
}

export default Linia;