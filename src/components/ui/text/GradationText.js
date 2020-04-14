import styled from 'styled-components'

const GradationText = styled.div`  
    font-size: ${props => props.fontSize || 1}em;
    font-weight: ${props => props.fontWeight || "normal"};
    margin: 10px;
    background: linear-gradient(to right, #cb60b3 0%, #f2513c 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export default GradationText



