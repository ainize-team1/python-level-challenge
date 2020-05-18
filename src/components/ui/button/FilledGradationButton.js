import styled from 'styled-components'

const FilledGradationButton = styled.button`
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 26px;
    letter-spacing: 0.15px;
    color: #FFFFFF;
    width: 180px;
    height: 55px;
    border: 0;
    background: linear-gradient(94.95deg, #AD1DF0 0%, #FF8C25 100%);
    box-shadow: 0px 10px 20px rgba(215, 85, 138, 0.2);
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 17%;

    @media (max-width: 1000px) {
        font-size: 1.3rem;
    }
`

export default FilledGradationButton
