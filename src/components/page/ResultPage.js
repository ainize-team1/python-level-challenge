import React from 'react';
import _ from 'underscore';
import styled from 'styled-components';
import { Helmet } from "react-helmet";
import resultList from '../../static/json/resultList';
import answerList from '../../static/json/python_answer.json';
import ShareLink from '../ui/ShareLink';
import Answers from '../ui/Answers';
import GradationButton from '../ui/button/GradationButton.js';
import GradationText from '../ui/text/GradationText.js';
import Footer from '../ui/Footer';

const base64url = require('base64-url');

const Image = styled.img`
    @media (min-width: 1000px) {
        height: 500px;
        width: 500px;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
    @media (max-width: 1000px) {
        height: auto;
        width: 45vh;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    animation: fadein 2s;
    -moz-animation: fadein 2s;
    -webkit-animation: fadein 2s; 
    -o-animation: fadein 2s;

    @keyframes fadein {
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-moz-keyframes fadein { 
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-webkit-keyframes fadein { 
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-o-keyframes fadein { 
        from {
            opacity:0;
        }
        to {
            opacity: 1;
        }
    }
`;

const Description = styled.div`
    margin-top: 10px;
    font-size: 1rem;
    width: 90%;
`;

const ScoreText = styled.div`
    color: grey;
    font-size: 1em;
    margin: 5px;
`;

const LevelText = styled.div`
    margin-top: 5%;
    font-size: 1em;
`;

const TopText = styled.div`
    font-size: 1.2em;
`

class Result extends React.Component {
    constructor() {
        super();

        this.state = {
            title: `Python Quiz Flex`,
            description: "Let's take a look Python quiz and show off your score.",
            answers: {},
            score: null,
            result: {},
        };
    }

    componentWillMount(){
        const answers = this.decodeAnswer(new URLSearchParams(this.props.location.search).get("answers"));
        const score = answers[1].filter((answer,index) => {return answer===parseInt(answerList[answers[0][index]-1].Answer)}).length;
        const result = _.sample(resultList[score]);
        this.setState({
            answers,
            score,
            result,
        })
    }

    decodeAnswer(encoded) {
        const decodedString = base64url.decode(encoded);
        try {
            return JSON.parse(decodedString);
        } catch (e) {
            return null;
        }
    }

    render() {
        const { answers, score, result } = this.state;

        return (
            <Wrapper>
                <LevelText>
                    {'Your level is'}
                </LevelText>

                <GradationText fontSize={'2.3em'} fontWeight={"bold"}>
                    {result.Name}
                </GradationText>

                <TopText>
                    Top {result.Top}%
                </TopText>

                <ScoreText>
                    Score: {score} / {answers[0].length}
                </ScoreText>

                <Image src={require(`../../static/img/result/level_${score}.png`)}/>

                <Description>
                    {result.Description}
                </Description>

                <GradationText fontSize={'1em'}>
                    {'Flex your level'}
                </GradationText>

                <ShareLink />

                <GradationButton
                    onClick={()=>window.location.href = '/'}
                    text={"Start a new quiz"} />

                <GradationButton
                    onClick={()=>window.location.href = '/'}
                    text={"Discuss the quiz with others"} />

                <Answers answerSheet={answers} />

                <Footer />
            </Wrapper>
        )
    };
}

export default Result;
