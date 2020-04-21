import React from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {tomorrowNight} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import questions from '../../static/json/python';
import answers from '../../static/json/python_answer';

const Wrapper = styled.div`
    width: 100vw;
    min-width: 300px;
    max-width: 800px;
    flex-direction: column;
`;

const Header = styled.div`
`;

const ReturnButton = styled.button`
    margin-left: ${props => props.marginLeft || 0}px;
    margin-top: ${props => props.marginTop || 0}px;
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    outline: none;
    font-family: IBM Plex Sans;
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

const SubjectText = styled.div`
    margin-left: ${props => props.marginLeft || 0}px;
    margin-right: ${props => props.marginRight || 0}px;
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
    margin-right: ${props => props.marginRight || 0}px;
    margin-bottom: 24px;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: 0.15px;
    color: #f2f2f2;
`;

const SelectText = styled.div`
    margin-bottom: 24px;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.15px;
    color: ${props => props.color || '#828282'};
`;

const SyntaxHighlighterWrapper = styled.div`
    margin-left: 24px;
    margin-right: 24px;
    margin-bottom: 32px;
`;

const ButtonWrapper = styled.div`
    text-align: center;
    margin-left: 24px;
    margin-right: 24px;
`;

const AnswerWrapper = styled.div`
    display: flex;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 16px;
    border-radius: 4px;
    
    font-family: IBM Plex Sans;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: #333333;
    
    background-color: ${props => props.backgroundColor || '#f2f2f2'};
    border: none;
    outline: none;
`;

const BoxWrapper = styled.div`
    position: relative;
    flex: ${props => props.flex || '1'};
`;

const Box = styled.img`
    vertical-align: middle;
`;

const Answer = styled.div`
    flex: ${props => props.flex || '1'};
    font-size: 18px;
`;

class AnswerBoard extends React.Component {
    constructor(props) {
        super(props);

        const {Id, Selected} = props.location.state;
        this.state = {
            questionNumber: Id.toString(),
            userAnswer: Selected.toString(),
            question: questions[Id - 1],
            originalAnswer: answers[Id - 1].Answer,
            correct: (Selected.toString() === answers[Id - 1].Answer),
        };
    }

    render() {
        return (
            <Wrapper>
                <Header>

                </Header>
                <ReturnButton marginLeft={24}
                              marginTop={19}
                              onClick={() => this.props.history.goBack()}>
                    {'< Result'}
                </ReturnButton>

                <SubjectText marginLeft={24} marginRight={24}>
                    {`${this.state.question.Subject}`}
                </SubjectText>

                <QuestionText marginLeft={24} marginRight={24}>
                    {`${this.state.question.Question}`}
                </QuestionText>

                <SyntaxHighlighterWrapper>
                    {this.state.question.Code &&
                    <SyntaxHighlighter language={this.props.language}
                                       style={tomorrowNight}>
                        {this.state.question.Code}
                    </SyntaxHighlighter>}
                </SyntaxHighlighterWrapper>

                {
                    (this.state.correct ? (
                            <SelectText color={'#56CCF2'}>Correct</SelectText>)
                        : (<SelectText color={'#EB5757'}>Wrong</SelectText>))
                }

                <ButtonWrapper>
                    {this.state.question.Answers.map((answer, i) => {
                        let buttonColor = '#f2f2f2';
                        let checkBox = null;

                        if (answer) {
                            if (this.state.correct) {
                                if (i.toString() === this.state.userAnswer) {
                                    checkBox = require(
                                        '../../static/img/answer/CorrectWhite.svg');
                                    buttonColor = '#56CCF2';
                                }
                            } else {
                                if (i.toString() === this.state.userAnswer) {
                                    checkBox = require(
                                        '../../static/img/answer/CorrectBlue.svg');
                                } else if (i.toString() ===
                                    this.state.originalAnswer) {
                                    checkBox = require(
                                        '../../static/img/answer/Incorrect.svg');
                                    buttonColor = '#EB5757';
                                }
                            }

                            return (
                                <AnswerWrapper backgroundColor={buttonColor}>
                                    <BoxWrapper flex={1}>
                                        <Box src={checkBox}/>
                                    </BoxWrapper>

                                    <Answer flex={6}>
                                        {this.state.question.Answers[i]}
                                    </Answer>

                                    <BoxWrapper flex={1}>
                                    </BoxWrapper>
                                </AnswerWrapper>
                            );
                        } else {
                            return null;
                        }
                    })}
                </ButtonWrapper>
            </Wrapper>
        );
    }
}

export default withRouter(AnswerBoard);
