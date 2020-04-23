import React from 'react';
import styled from 'styled-components';
import GradationText from '../ui/text/GradationText.js';
import FilledGradationButton from '../ui/button/FilledGradationButton';
import Spinner from '../ui/Spinner'

const TextWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
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
            window.location.href = '/quiz'
        }, 750)
    }

    render() {
        return (
            <Wrapper>
                { this.state.clicked ? <Spinner/>: ""}

                <TextWrapper style={{marginTop: '5%'}}>
                    <LogoImg/>

                    <GradationText style={{
                        marginTop: '0px',
                        fontStyle: 'italic',
                        letterSpacing: '0.15px',
                    }} fontSize={'3.125rem'} fontWeight={'bold'}>
                        PYTHON<br/>
                        LEVEL<br/>
                        CHALLENGE
                    </GradationText>

                </TextWrapper>

                <FilledGradationButton onClick={ this.onSpinner }>
                    Challenge!
                </FilledGradationButton>
            </Wrapper>
        );
    }
}

export default AppPage;
