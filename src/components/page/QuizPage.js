import React from 'react';
import styled from 'styled-components';
import QuestionBoard from '../ui/QuestionBoard';
import questions from '../../static/json/python';

const _ = require('lodash');

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 360px;
`;

class Quiz extends React.Component {
    constructor() {
        super();

        this.state = {
        };
    }

    render() {
        return (
            <Wrapper>
                <QuestionBoard questions={_.sampleSize(questions, 3)} />
            </Wrapper>
        );
    }
}

export default Quiz;
