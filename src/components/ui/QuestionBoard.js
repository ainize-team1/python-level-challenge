import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #333333;
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;
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

const InfoText = styled.div`
    margin-top: ${props => props.marginTop || 0}px;
    font-family: Roboto;
    font-size: 14px;
    line-height: 1.71;
    text-align: center;
    color: #ffffff;
`;

class Questionboard extends React.Component {
    constructor() {
        super();

        this.state = {
            count: 0,
        };
    }

    render() {
        const { count } = this.state;
        const { questions } = this.props;

        return (
            <Wrapper>
                <Header>
                    <CountText marginLeft={24} marginTop={24}>
                        {`${count + 1}/10`}
                    </CountText>
                </Header>
                <InfoText marginTop={20}>
                    {`${questions[count].Subject}`}
                </InfoText>
            </Wrapper>
        );
    }
}

export default Questionboard;
