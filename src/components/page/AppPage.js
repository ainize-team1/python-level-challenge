import React from 'react';
import styled from 'styled-components';
import FilledGradationButton from '../ui/button/FilledGradationButton';
import GradationText from '../ui/text/GradationText';
import Spinner from '../ui/Spinner';

const bgDesktop = require('../../static/img/intro/background.jpeg');

const TextWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 5%;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 1000px) {
        height: 100vh;
        width: 100vh;
        background: url(${require('../../static/img/intro/background.jpeg')}) no-repeat center center; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }

    @media (max-width: 1000px) {
        height: 100vh;
        width: 100%;
        background: url(${require('../../static/img/intro/background.jpeg')}) no-repeat center center; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;     
    }

`;

const LogoImg = styled.img.attrs({
    src: require('../../static/img/intro/python_logo.png')
})`
    width: 40px;
    height: 40px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 28px;
    alt: "Python logo";
`;

const Background = styled.img`
    position: relative;
    width: 245px;
    object-fit: contain;
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
        })

        setTimeout(() => {
            window.location.href = '/quiz';
        }, 750)
    }

    render() {
        return (
            <Wrapper image={bgDesktop}>
                <Background src={'../../static/img/intro/background-desktop.jpg'}></Background>
                { this.state.clicked ? <Spinner/>: ""}

                <TextWrapper>
                    <LogoImg/>

                    <GradationText fontSize={'3.125rem'}
                                   fontStyle={'italic'}
                                   marginTop={'0dp'}>
                        {'PYTHON'}<br/>
                        {'LEVEL'}<br/>
                        {'CHALLENGE'}
                    </GradationText>

                </TextWrapper>

                <FilledGradationButton onClick={ this.onSpinner }>
                    {'Challenge!'}
                </FilledGradationButton>
            </Wrapper>
        );
    }
}

export default AppPage;
