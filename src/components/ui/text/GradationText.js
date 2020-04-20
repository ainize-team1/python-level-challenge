import styled from 'styled-components'

const GradationText = styled.div`  
    font-size: ${props => props.fontSize || 1}em;
    font-weight: ${props => props.fontWeight || "normal"};
    text-align:center;
    background: linear-gradient(to right, #6f00cc 0%, #FF8C25 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export default GradationText



