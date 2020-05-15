import React from 'react';
import _ from 'underscore';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import resultList from '../../static/json/result_list';
import answerList from '../../static/json/python_answer.json';
import ShareLink from '../ui/ShareLink';
import Answers from '../ui/Answers';
import GradationButton from '../ui/button/GradationButton.js';
import GradationText from '../ui/text/GradationText.js';
import Footer from '../ui/Footer';
import Context from '../context/Context';

const lz = require('lz-string');

const redditURL = 'https://www.reddit.com/r/PythonLevelChallenge';

const Image = styled.img`
    margin-top: 32px;
    @media (min-width: 1000px) {
        height: auto;
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
    margin-top: 16px;
    font-size: 1rem;
    text-align: center;
    width: 90%;
`;

const ScoreText = styled.div`
    color: grey;
    font-size: 0.8rem;
    margin: 8px;

    @media (max-width: 1000px) {
        font-size: 1rem;
    }
`;

const LevelText = styled.div`
    margin-top: 15%;
    font-size: 1rem;

    @media (max-width: 1000px) {
        font-size: 1.2rem;
    }
`;

const TopText = styled.div`
    margin-top: 24px;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: bold;
    font-size: 1.2rem;

    @media (max-width: 1000px) {
        font-size: 1.4rem;
    }
`

class ResultPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            answers: {},
            score: null,
            result: {},
        };
    }

    componentWillMount(){
        if (this.context.redirect) window.location.href = '/';

        const answers = this.decodeAnswer(new URLSearchParams(this.props.location.search).get('query'));
        const score = answers[1].filter((answer,index) => { return answer===parseInt(answerList[answers[0][index]-1].Answer) }).length;
        const result = _.sample(resultList[score]);
        this.setState({
            answers,
            score,
            result,
        });
    }

    decodeAnswer(encoded) {
        const decodedString = lz.decompressFromEncodedURIComponent(encoded);

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
                <Helmet>
                    <meta property="og:title" content="Python Level Challenge" data-react-helmet="true" />
                    <meta property="og:type" content="website" data-react-helmet="true" />
                    <meta property="og:description" content={result.Description} data-react-helmet="true" />
                    <meta property="og:image" content={`../../static/img/result/level_${score}.png`} data-react-helmet="true" />
                </Helmet>

                <LevelText>
                    {'Your level is'}
                </LevelText>

                <GradationText fontSize={'2.3rem'} fontWeight={'bold'}>
                    {result.Name}
                </GradationText>

                <TopText>
                    {'Top'} {result.Top}%
                </TopText>

                <ScoreText>
                    {'Score:'} {score} / {answers[0].length}
                </ScoreText>

                <Image src={`../../static/img/result/level_${score}.png`} />

                <Description>
                    {result.Description}
                </Description>

                <GradationText fontWeight={'bold'} fontSize={'1.2rem'} marginTop={'3rem'}>
                    {'Flex your level'}
                </GradationText>

                <ShareLink />

                <GradationButton
                    onClick={() => window.location.href='/'}
                    text={'Start a new quiz'} />

                <GradationButton
                    onClick={() => window.open(redditURL, "_blank")}
                    text={'Discuss the quiz with others'} />

                <Answers answerSheet={answers} />

                <Footer />
            </Wrapper>
        )
    };
}

ResultPage.contextType = Context;

export default ResultPage;
