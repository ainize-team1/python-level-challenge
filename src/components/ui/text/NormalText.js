import styled from 'styled-components'

const NormalText = styled.div`
    font-weight: normal;
    font-size: ${props => props.fontSize || 20}px;
    text-align: center;
    letter-spacing: 0.15px;
    color: #FFFFFF;
    margin-left: 100px;
    margin-right: 100px;
`

export default NormalText

