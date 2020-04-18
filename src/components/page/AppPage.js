import React from 'react';
import styled from 'styled-components';
import GradationText from '../ui/text/GradationText.js';
import NormalText from '../ui/text/NormalText';
import FilledGradationButton from '../ui/button/FilledGradationButton';

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #333333;
`;

/*
    TODO(Dongcheol,Daesung)
    - Design for full screen
*/

const Background = styled.div`
    height: 100vh;
    width: 48vh;
    background: url(${require('../../static/img/intro/background.png')}) no-repeat center center; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

`;

class AppPage extends React.Component {
    constructor() {
        super();

        this.state = {
        };
    }

    render() {
        return (
            <Wrapper>
                {/* TODO: Background Image */}
                <Background>
                    <GradationText style= {{marginTop:"56px"}} fontSize={2.6} fontWeight={'bold'}>
                        PythonQuizFlex
                    </GradationText>
                    <NormalText style= {{marginTop:"24px", fontSize:"16px"}}>
                        Challenge and brag your<br/>
                        python language level
                    </NormalText>
                    <FilledGradationButton onClick={()=>window.location.href = '/quiz'}>
                        Start a Quiz
                    </FilledGradationButton>
                </Background>
            </Wrapper>
        );
    }
}

export default AppPage;
