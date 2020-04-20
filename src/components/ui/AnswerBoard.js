import React from 'react';
import {Redirect} from 'react-router-dom';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {tomorrowNight} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import questions from '../../static/json/python';
import answers from '../../static/json/python_answer';
const base64url = require('base64-url');

const Wrapper = styled.div`
    width: 100vw;
    min-width: 300px;
    max-width: 800px;
    flex-direction: column;
`;

const Header = styled.div`
    margin-bottom: 16px;
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
    class: 'parent';
    width: 100%;
    overflow: auto;
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
// url(${require('../../static/img/intro/background.png')})
const BoxWrapper = styled.div`
    float: left;
    // height: 100%;
    
    margin-left: 9px;
`;

const Box = styled.img`
    vertical-align: middle;
`;

const Answer = styled.div`
    vertical-align: middle;
`;

const AnswerButton = styled.button`
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
    // :hover {
    //     background-color: #b2b2b2;
    // }
    // :active {
    //     background-color: #f2f2f2;
    // }
`;

class AnswerBoard extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  renderRedirect = () => {

  };

  onButtonClick = (index) => {

  };

  render() {
    const {questionNumber, userAnswer, language} = this.props;
    const question = questions[questionNumber-1];
    const originalAnswer = answers[questionNumber-1].Answer;
    const correct = (userAnswer === originalAnswer);

    return (
        <Wrapper>
          <Header>
            TODO: Result Button
          </Header>

          <SubjectText marginLeft={24} marginRight={24}>
            {`${question.Subject}`}
          </SubjectText>

          <QuestionText marginLeft={24} marginRight={24}>
            {`${question.Question}`}
          </QuestionText>

          <SyntaxHighlighterWrapper>
            {question.Code && <SyntaxHighlighter language={language}
                                                         style={tomorrowNight}>
              {question.Code}
            </SyntaxHighlighter>}
          </SyntaxHighlighterWrapper>

          {
            (correct ? (<SelectText color={'#56CCF2'}>Correct</SelectText>)
                : (<SelectText color={'#EB5757'}>Wrong</SelectText>))
          }

          <ButtonWrapper>
            {question.Answers.map((answer, i) => {
              let buttonColor = '#f2f2f2';
              if (answer) {
                if (correct) {
                  if (i.toString() === userAnswer) {
                    /* TODO: White CheckBox */
                    buttonColor = '#56CCF2';
                  }
                } else {
                  if (i.toString() === userAnswer) {
                    /* TODO: Blue CheckBox */
                    // buttonColor = '#338822';
                  } else if(i.toString() === originalAnswer) {
                    /* TODO: White XBox */
                    buttonColor = '#EB5757';
                  }
                }

                return (
                    <AnswerWrapper backgroundColor={buttonColor}>

                      <BoxWrapper>
                        <Box src={require('../../static/img/answer/CorrectWhite.svg')}/>

                      </BoxWrapper>
                      <Answer>{question.Answers[i]}</Answer>

                    </AnswerWrapper>
                );
              }
            })}
          </ButtonWrapper>

          {this.renderRedirect()}
        </Wrapper>
    );
  }
}

export default AnswerBoard;
