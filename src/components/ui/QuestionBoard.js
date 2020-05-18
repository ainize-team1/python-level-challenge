import React from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Context from '../context/Context';

const lz = require('lz-string');

const Wrapper = styled.div`
    width: 100vw;
    min-width: 300px;
    max-width: 800px;
    flex-direction: column;
`;

const Header = styled.div`
    margin-bottom: 16px;
`;

const CountText = styled.div`
    margin-top: ${props => props.marginTop || 0}px;
    margin-left: ${props => props.marginLeft || 0}px;
    margin-right: ${props => props.marginRight || 0}px;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 18px;
    letter-spacing: 0.15px;
    color: #f2f2f2;
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
    background: linear-gradient(to right, #AD1DF0 0%, #FF8C25 50%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
    margin-bottom: 24px;
`;

const QuestionText = styled.div`
    margin-left: ${props => props.marginLeft || 0}px;
    margin-right: ${props => props.marginRight || 0}px;
    margin-bottom: 24px;
    font-weight: regular;
    font-size: 1rem;
    line-height: 21px;
    letter-spacing: 0.15px;
    color: #f2f2f2;

    @media (max-width: 1000px) {
        font-size: 1.2rem;
    }
`;

const SelectText = styled.div`
    margin-top: 48px;
    margin-bottom: 24px;
    font-weight: normal;
    font-size: 1rem;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.15px;
    color: #828282;

    @media (max-width: 1000px) {
        font-size: 1.2rem;
    }
`;

const SyntaxHighlighterWrapper = styled.div`
    margin-left: 24px;
    margin-right: 24px;
`;

const ButtonWrapper = styled.div`
    text-align: center;
    margin-left: 24px;
    margin-right: 24px;
`;

const AnswerButton = styled.button`
    width: 100%;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 24px;
    padding-right: 24px;
    margin-bottom: 16px;
    border-radius: 10px;
    border: none;
    outline: none;
    font-family: IBM Plex Mono;
    font-size: 0.875rem;
    font-weight: bold;
    font-color: #333333;
    text-align: center;
    background-color: #f2f2f2;
    :active {
        background-color: #b2b2b2;
    }

    @media (max-width: 1000px) {
        font-size: 1.2rem;
    }

`;

class QuestionBoard extends React.Component {
    constructor() {
        super();

        this.state = {
            redirect: false,
            count: 0,
            answers: [[], []],
        };
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            const encoded = lz.compressToEncodedURIComponent(JSON.stringify(this.state.answers));

            return <Redirect to={ { pathname: `/result`,
                                    search: `?query=${encoded}` } } />
        }
    }

    onButtonClick = (index, id) => {
        this.state.answers[0].push(id);
        this.state.answers[1].push(index);

        if (this.state.count < this.props.questions.length - 1) {
            this.setState({ count: this.state.count + 1 });
        } else {
            this.context.toggleRedirect();
            this.setRedirect();
        }
    }

    render() {
        const { count } = this.state;
        const { questions, language } = this.props;

        return (
            <Wrapper>
                <Header>
                    <CountText marginLeft={24} marginTop={24} marginRight={24}>
                        {`${count + 1}/${this.props.questions.length}`}
                    </CountText>
                </Header>

                <SubjectText marginLeft={24} marginRight={24}>
                    {`${questions[count].Subject}`}
                </SubjectText>

                <QuestionText marginLeft={24} marginRight={24}>
                    {`${questions[count].Question}`}
                </QuestionText>

                <SyntaxHighlighterWrapper>
                    {questions[count].Code &&
                    <SyntaxHighlighter customStyle={{padding: '16px', whiteSpace: 'pre-wrap', wordBreak: 'break-word'}}
                        codeTagProps={{style: {fontFamily: 'IBM Plex Mono', fontSize: '1.2rem'}}}
                                       language={language}
                                       style={tomorrowNight}
                                       >
                        {questions[count].Code}
                    </SyntaxHighlighter>}
                </SyntaxHighlighterWrapper>

                <SelectText>
                    {`Select an answer`}
                </SelectText>

                <ButtonWrapper>
                    {questions[count].Answers.map((answer, i) => {
                        if (answer) {
                            return (
                                <AnswerButton
                                    key={`${count}-${i}`}
                                    onClick={() => this.onButtonClick(i, questions[count].Id)}>
                                    {questions[count].Answers[i]}
                                </AnswerButton>
                            )
                        }
                    })}
                </ButtonWrapper>

                {this.renderRedirect()}
            </Wrapper>
        );
    }
}

QuestionBoard.contextType = Context;

export default QuestionBoard;
