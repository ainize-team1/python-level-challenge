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
        background: url(${require('../../static/img/intro/background_desktop.png')}) no-repeat center center; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }

    @media (max-width: 1000px) {
        height: 100vh;
        width: 70vh;
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
                    <img style={{
                        width: '40px',
                        height: '40px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginBottom: '28px',
                    }}
                         src={require('../../static/img/intro/python_logo.png')}
                         alt="Python logo"/>

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
