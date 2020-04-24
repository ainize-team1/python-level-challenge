import React from 'react';
import styled from 'styled-components';
import GradationText from '../ui/text/GradationText.js';
import NormalText from '../ui/text/NormalText';
import FilledGradationButton from '../ui/button/FilledGradationButton';
import Spinner from '../ui/Spinner';
import Context from '../context/Context';

const TextWrapper = styled.div`
`;

const Wrapper = styled.div`
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
        height: 100%;
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
            clicked: false
        };
    }

    onSpinner = () => {
        this.setState({
            clicked: true
        });
        
        this.context.toggleRedirect();

        setTimeout(() => {
            this.props.history.push('/quiz');
        }, 500+ Math.floor(Math.random()*500));
    }

    render() {
        return (
            <Wrapper>
                {this.state.clicked ? <Spinner/>: ""}

                <TextWrapper>
                    <GradationText style={{marginTop:"56px"}} fontSize={2.6} fontWeight={'bold'}>
                        {"PythonQuizFlex"}
                    </GradationText>

                    <NormalText style={{marginTop:"24px", fontSize:"16px"}}>
                        {"Challenge and brag your python language level"}
                    </NormalText>
                </TextWrapper>

                <FilledGradationButton onClick={this.onSpinner}>
                    {"Start a Quiz"}
                </FilledGradationButton>
            </Wrapper>
        );
    }
}

AppPage.contextType = Context;

export default AppPage;
