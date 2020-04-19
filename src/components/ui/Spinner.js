import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner'

const Background = styled.div`
  background-color:rgba(0, 0, 0, 0.5);
  width: 100%; 
  height: 100%;
  position: fixed;
`;

const LoadingText = styled.div`
  text-align:center;
  position: fixed;
  top:60%;
  left:50%;
  color:#D7558A;
  font-weight:bold;
  transform: translate(-50%, 0);
`;

class Spinner extends React.Component {
    constructor() {
        super();

        this.state = {
        };
    }

    render() {
        const style = {position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"};
        
        return(
            <div>
                <Background/>

                <Loader 
                    type="TailSpin"
                    color="#D7558A"
                    height={80}
                    width={80}
                    style={style}
                />

                <LoadingText>
                    Populating a quiz...
                </LoadingText>
            </div>
        )
    }
}
export default Spinner;
