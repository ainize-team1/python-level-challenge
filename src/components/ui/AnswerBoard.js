import React from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {tomorrowNight} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import questions from '../../static/json/python';
import answers from '../../static/json/python_answer';

const correctWhiteImagePath = '../../static/img/answer/correct_white.svg';
const correctBlueImagePath = '../../static/img/answer/correct_blue.svg';
const incorrectImagePath = '../../static/img/answer/incorrect.svg';

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
    border: none;
    font-family: IBM Plex Sans;
    font-size: 0.875rem;
    font-weight: bold;
    text-align: center;
    background-color: #e0e0e0;
    :active {
        background-color: #b2b2b2;
    }
`;

const SubjectText = styled.div`
    margin-left: ${props => props.marginLeft || 0}px;
    margin-right: ${props => props.marginRight || 0}px;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
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
    font-size: 1rem;
    line-height: 21px;
    letter-spacing: 0.15px;
    color: #f2f2f2;
`;

const SelectText = styled.div`
    margin-bottom: 24px;
    font-weight: normal;
    font-size: 1rem;
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
    
    font-family: IBM Plex Mono;
    font-size: 0.875rem;
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
    font-size: 1.125rem;
`;

class AnswerBoard extends React.Component {
    constructor(props) {
        super(props);

        const {id, selected} = props.location.state;
        this.state = {
            questionNumber: id,
            userAnswer: selected,
            question: questions[id - 1],
            originalAnswer: answers[id - 1].Answer,
            correct: (selected === answers[id - 1].Answer),
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
                    <SyntaxHighlighter customStyle={{padding: '16px'}}
                                       codeTagProps={{style: {fontFamily: 'IBM Plex Mono'}}}
                                       language={this.props.language}
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
                                if (i === this.state.userAnswer) {
                                    checkBox = correctWhiteImagePath;
                                    buttonColor = '#56CCF2';
                                }
                            } else {
                                if (i === this.state.userAnswer) {
                                    checkBox = incorrectImagePath;
                                    buttonColor = '#EB5757';
                                } else if (i ===
                                    this.state.originalAnswer) {
                                    checkBox = correctBlueImagePath;
                                }
                            }

                            return (
                                <AnswerWrapper backgroundColor={buttonColor} key={i}>
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
