
import styled from 'styled-components'

const GradationText = styled.div`  
font-size: ${props => props.fontSize || 1}em;
font-weight: ${props => props.fontWeight || "normal"};
margin: 10px;
background: linear-gradient(to right, #cb60b3 0%, #f2513c 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`

const NormalText = styled.div`
font-family: IBM Plex Sans;
font-style: normal;
font-weight: normal;
font-size: ${props => props.fontSize || 20}px;
line-height: 21px;
text-align: center;
letter-spacing: 0.15px;
color: #FFFFFF;
`

export {GradationText, NormalText}



