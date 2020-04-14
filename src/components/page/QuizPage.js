import React from 'react';
import styled from 'styled-components';
import QuestionBoard from '../ui/QuestionBoard';
import questions from '../../static/json/python';

const _ = require('lodash');

const Wrapper = styled.div`
    width: 100%;
    background-color: #321321;
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
                {/* TODO: more languages will be supported. */}
                <QuestionBoard questions={_.sampleSize(questions, 3)} language='python' />
            </Wrapper>
        );
    }
}

export default Quiz;
