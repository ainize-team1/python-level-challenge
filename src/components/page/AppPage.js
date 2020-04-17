import React from 'react';
import styled from 'styled-components';
import GradationText from '../ui/text/GradationText.js';
import NormalText from '../ui/text/NormalText';
import FilledGradationButton from '../ui/button/FilledGradationButton';
import Spinner from '../ui/Spinner'

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
`;
/* 
    TODO(Dongcheol,Daesung)
    - Add background image
    - Design for full screen 
*/
const Background = styled.div`
    height: 100vh;
    width: 48vh;
    background: url('https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg') no-repeat center center; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

`;

class AppPage extends React.Component {
    constructor() {
        super();

        this.state = {
            clicked: false
        };
    }
    onClick = () => {
        this.setState({
            clicked:true
        })
        setTimeout(() => {
            window.location.href = '/quiz'
        }, 750)
    }
    render() {
        return (
            <Wrapper>
                {/* TODO: Background Image */}
                <Background>
                    {this.state.clicked === true ? <Spinner/> : ""}
                    <GradationText style= {{marginTop:"56px"}} fontSize={2.6} fontWeight={'bold'}>
                        PythonQuizFlex
                    </GradationText>
                    <NormalText style= {{marginTop:"24px", fontSize:"16px"}}>
                        Challenge and brag your<br/>
                        python language level
                    </NormalText> 
                    <FilledGradationButton onClick = {this.onClick}>
                        Start a Quiz
                    </FilledGradationButton>
                </Background>
            </Wrapper>
        );
    }
}

export default AppPage;
