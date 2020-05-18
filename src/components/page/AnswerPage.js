import React from 'react';
import styled from 'styled-components';
import AnswerBoard from '../ui/AnswerBoard';

const Wrapper = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: center;
`;

class AnswerPage extends React.Component {
    constructor() {
        super();

        this.state = {
        };
    }

    render() {
        return (
            <Wrapper>
                <AnswerBoard language='python'/>
            </Wrapper>
        );
    }
}

export default AnswerPage;
