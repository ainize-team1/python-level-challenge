import React from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import questionsList from '../../static/json/python.json';
import answerList from '../../static/json/python_answer.json';
/*
    ToDo:
    - questionsList에서 일일이 찾는건 너무 비효율적인데.....
    - state안에 answer 정보가 있어야되나??
*/
const Wrapper = styled.div`
    width: 100%;
    flex-direction: column;
`;

const Header = styled.div`
    margin-bottom: 30px;
`;

const CountText = styled.div`
    margin-top: ${props => props.marginTop || 0}px;
    margin-left: ${props => props.marginLeft || 0}px;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.15px;
    color: #f2f2f2;
`;

const SubjectText = styled.div`
    margin-left: ${props => props.marginLeft || 0}px;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 42px;
    letter-spacing: 0.15px;
    background: linear-gradient(to right, #AD1DF0 0%, #FF8C25 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
    margin-bottom: 24px;
`;

const QuestionText = styled.div`
    margin-left: ${props => props.marginLeft || 0}px;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: 0.15px;
    color: #f2f2f2;
`;

const AnswerButton = styled.button`
    width: 90%;
    max-width: 312px;
    height: 45px;
    margin-bottom: 16px;
    border-radius: 4px;
    outline: none;
    font-family: Roboto;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: #333333;
    :hover {
        background-color: #b2b2b2;
    }
    :active {
        background-color: #f2f2f2;
    }
`;

class AnswerPage extends React.Component {
    constructor() {
        super();

        this.state = {
            redirect: false,
            count: 0,
            answers: [],
        };
    }
    /*
        TODO:
        - this.props.location.state.{attr}
        - import qustion
    */

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={ { pathname: '/result',
                                    state: { answers: this.state.answers } } } />
        }
    }

    render() {
        const { questions, language } = this.props;
        const {index,checkedAnswer,id} = this.props.location.state
        const {count} = this.state
        return (
            <Wrapper>
                <Header>
                    <CountText marginLeft={24} marginTop={24}>
                        {`Q ${index}`}
                    </CountText>
                </Header>

                <SubjectText marginLeft={24}>
                    {`${questions[count].Subject}`}
                </SubjectText>

                <QuestionText marginLeft={24}>
                    {`${questions[count].Question}`}
                </QuestionText>

                {language && <SyntaxHighlighter language={language} style={tomorrowNight}>
                    {questions[count].Code}
                </SyntaxHighlighter>}

                {questions[count].Answers.map((answer, i) => {
                    if (answer) {
                        return (
                            <AnswerButton key={`${i}`}
                                onClick={() => this.onButtonClick(i)}>
                                    {questions[count].Answers}
                            </AnswerButton>
                        )
                    }
                })}

                {this.renderRedirect()}
            </Wrapper>
        );
    }
}

export default AnswerPage;
