import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 360px;
    background-color: #123123;
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const CountText = styled.div`
    margin-top: ${props => props.marginTop || 0}px;
    margin-left: ${props => props.marginTop || 0}px;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.15px;
    color: #f2f2f2;
`;

class Quiz extends React.Component {
    constructor() {
        super();

        this.state = {
            count: 1,
        };
    }

    render() {
        const { count } = this.state;

        return (
            <Wrapper>
                <Header>
                    <CountText marginLeft={24} marginTop={24}>
                        {`${count}/10`}
                    </CountText>
                </Header>
            </Wrapper>
        );
    }
}

export default Quiz;
