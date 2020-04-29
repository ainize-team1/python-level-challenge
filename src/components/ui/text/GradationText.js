import styled from 'styled-components'

const GradationText = styled.div`  
    font-size: ${props => props.fontSize || '1.5rem'};
    font-weight: ${props => props.fontWeight || "normal"};
    font-style: ${props => props.fontStyle || "normal"};
    text-align: ${props => props.textAlign || "center"};
    margin-top: ${props => props.marginTop || "8px"};
    margin-bottom: ${props => props.marginBottom || "8px"};
    background: linear-gradient(100deg, #AD1DF0 3.46%, #FF8C25 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 1000px) {
        font-style: ${props => props.fontStyle || "normal"};
        font-weight: ${props => props.fontWeight || "normal"};
        font-size: ${props => props.fontSize || '3rem'};
    }
`;

export default GradationText;
