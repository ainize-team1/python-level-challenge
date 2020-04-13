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
`;

export default GradationButton