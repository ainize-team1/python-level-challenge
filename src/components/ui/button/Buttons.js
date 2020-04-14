
import styled from 'styled-components'
// TODO how to make boder-radius??
const GradationButton = styled.button`
padding: 0.375rem 0.75rem;
font-size: 0.75rem;
line-height: 1.5;
margin: 5px;
width: 80%;
max-width: 300px;
font-weight: 500;
background: #ef4e28;
background: linear-gradient(to right, #cb60b3 0%, #f2513c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;  

border: 1px solid transparent;
border-image: linear-gradient(to right, #cb60b3 0%, #f2513c 100%);
border-image-slice: 1;
border-radius: 0.5rem;
`

const FilledGradationButton = styled.button`
font-family: IBM Plex Sans;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 26px;
letter-spacing: 0.15px;
color: #FFFFFF;

margin-left: auto;
margin-right: auto;
margin-top: 321px;
margin-bottom: 90px;
display: block;
width: 180px;
height: 55px;
border: 0;

background: linear-gradient(94.95deg, #AD1DF0 3.46%, #FF8C25 101.16%);
box-shadow: 0px 10px 20px rgba(215, 85, 138, 0.2);
border-radius: 10px;
`

export {GradationButton, FilledGradationButton}
