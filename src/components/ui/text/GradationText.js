import styled from 'styled-components'

const GradationText = styled.div`  
    font-size: ${props => props.fontSize || '1em'};
    font-weight: ${props => props.fontWeight || "normal"};
    text-align: center;
    margin-top: 5px;
    margin-bottom: 5px;
    background: linear-gradient(92.18deg, #AD1DF0 3.46%, #FF8C25 101.16%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export default GradationText;
