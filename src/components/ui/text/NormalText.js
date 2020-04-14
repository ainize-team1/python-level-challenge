import styled from 'styled-components'

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

export default NormalText

