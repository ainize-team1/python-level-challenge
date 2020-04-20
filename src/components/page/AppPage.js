import React from 'react';
import styled from 'styled-components';
import GradationText from '../ui/text/GradationText.js';
import NormalText from '../ui/text/NormalText';
import FilledGradationButton from '../ui/button/FilledGradationButton';

const Wrapper = styled.div`
`;

/*
    TODO(Dongcheol,Daesung)
    - Design for full screen
*/

const Background = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: 1000px) {
        height: 100vh;
        width: 100vh;
        background: url(${require('../../static/img/intro/background-desktop.jpg')}) no-repeat center center; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }

    @media (max-width: 1000px) {
        height: 100vh;
        width: 48vh;
        background: url(${require('../../static/img/intro/background.png')}) no-repeat center center; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;     
    }

`;

class AppPage extends React.Component {
    constructor() {
        super();

        this.state = {
        };
    }

    render() {
        return (
                <Background>
                    <NormalText style= {{marginTop:"24px", fontSize:"16px"}}>
                        <GradationText style= {{marginTop:"56px"}} fontSize={2.6} fontWeight={'bold'}>
                            PythonQuizFlex
                        </GradationText>

                        Challenge and brag your python language level
                    </NormalText>

                    <FilledGradationButton onClick={()=>window.location.href = '/quiz'}>
                        Start a Quiz
                    </FilledGradationButton>
                </Background>
        );
    }
}

export default AppPage;
