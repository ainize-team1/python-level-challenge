import styled from 'styled-components'

// TODO how to make boder-radius??
const GradationButton = styled.div`
    cursor: pointer;
    padding: 0.375rem 0.75rem;
    font-family: IBM Plex Sans;
    font-size: 1rem;
    text-align: center;
    line-height: 1.5;
    margin: 5px;
    width: 80%;
    font-weight: 500;
    background: #ef4e28;
    background: linear-gradient(to right, #6f00cc 0%, #f2513c 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;  
    
    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(to right, #6f00cc 0%, #f2513c 100%);
        -moz-border-image: -moz-linear-gradient(to right, #6f00cc 0%, #f2513c 100%);
        -webkit-border-image: -webkit-linear-gradient(to right, #6f00cc 0%, #f2513c 100%);
    border-image-slice: 2;
        -webkit-border-image-slice: 2;

    :hover {
      border-width: 1px;
      border-style: solid;
      border-image: linear-gradient(to right, #f2513c 0%, #cb60b3 100%);
          -moz-border-image: -moz-linear-gradient(to right, #f2513c 0%, #cb60b3 100%);
          -webkit-border-image: -webkit-linear-gradient(to right, #f2513c 0%, #cb60b3 100%);
      border-image-slice: 2;
          -webkit-border-image-slice: 2;
    }
`;

export default GradationButton;
