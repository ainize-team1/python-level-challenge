import React from 'react';
import styled from 'styled-components';
import { GradationText, NormalText } from '../ui/text/Texts.js';
import { FilledGradationButton } from '../ui/button/Buttons';

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #333333;
`;

const Background = styled.div`
    width: 100%;
    background-image: url('./intro_background.png;
    background-position: 'center';
    background-size: 'cover';
    background-repeat: 'no-repeat';
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
                <GradationText style= {{marginTop:"56px"}} fontSize={2.6} fontWeight={'bold'}>PythonQuizFlex</GradationText>
                <NormalText style= {{marginTop:"24px", fontSize:"16px"}}>
                    Challenge and brag your<br/>
                    python language level
                </NormalText>
                <FilledGradationButton onClick={()=>window.location.href = '/quiz'}>Start a Quiz</FilledGradationButton>
            </Wrapper>
        );
    }
}

export default AppPage;
