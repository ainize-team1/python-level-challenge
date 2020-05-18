import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

const Wrapper = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: center;
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

const StyledLoader = styled(Loader)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

class Spinner extends React.Component {
    constructor() {
        super();

        this.state = {
        };
    }

    render() {
        return(
            <Wrapper>
                <StyledLoader 
                    type='TailSpin'
                    color='#D7558A'
                    height={80}
                    width={80} />

                <LoadingText>
                    Populating a quiz...
                </LoadingText>
            </Wrapper>
        )
    }
}
export default Spinner;
