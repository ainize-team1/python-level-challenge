import React from 'react';
import styled from 'styled-components';
import FilledGradationButton from '../ui/button/FilledGradationButton';
import Spinner from '../ui/Spinner'

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

const GradationTitle = styled.div`  
    font-size: 3.125rem;
    font-weight: bold;
    font-style: italic;
    text-align: center;
    margin-top: 0px;
    margin-bottom: 5px;
    background: linear-gradient(92.18deg, #AD1DF0 3.46%, #FF8C25 101.16%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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

                <TextWrapper>
                    <LogoImg/>

                    <GradationTitle>
                        PYTHON<br/>
                        LEVEL<br/>
                        CHALLENGE
                    </GradationTitle>

                </TextWrapper>

                <FilledGradationButton onClick={ this.onSpinner }>
                    Challenge!
                </FilledGradationButton>
            </Wrapper>
        );
    }
}

export default AppPage;
