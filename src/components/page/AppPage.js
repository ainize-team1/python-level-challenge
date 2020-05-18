import React from 'react';
import styled from 'styled-components';
import FilledGradationButton from '../ui/button/FilledGradationButton';
import GradationText from '../ui/text/GradationText';
import Spinner from '../ui/Spinner';

const backgroundImagePath = '../../static/img/intro/background.jpeg';
const pythonImagePath = '../../static/img/intro/python_logo.png';

const TextWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 10%;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 1000px) {
        height: 100vh;
        width: 100vh;
        background: url(${backgroundImagePath}) no-repeat center center; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }

    @media (max-width: 1000px) {
        height: 100%;
        width: 100%;
        background: url(${backgroundImagePath}) no-repeat center center; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;     
    }

`;

const LogoImg = styled.img.attrs({
    src: pythonImagePath
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
        });

        setTimeout(() => {
            this.props.history.push('/quiz');
        }, 500+ Math.floor(Math.random()*500));
    }

    render() {
        return (
            <Wrapper>
                {this.state.clicked ? <Spinner/>: ""}

                <TextWrapper>
                    <LogoImg/>

                    <GradationText fontSize={'3rem'}
                                   fontStyle={'italic'}
                                   fontWeight={'bold'}
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
