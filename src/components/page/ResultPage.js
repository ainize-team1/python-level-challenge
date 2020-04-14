import React from 'react';
import _ from 'underscore';
import styled from 'styled-components'
import resultList from '../../static/json/resultList';
import ShareLink from '../ui/ShareLink';
import Answers from '../ui/Answers';
import GradationButton from '../ui/button/GradationButton.js';
import GradationText from '../ui/text/GradationText.js';


const Image = styled.img`
    max-height:400px;
    max-width:300px;
    width:90%;
    height:100%;
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Description = styled.div`
    font-size:0.5rem;
    width:90%;
    text-align:center;
`;

const ScoreText = styled.div`
    color:grey;
    font-size:5px;
    margin:5px;
`;

const LevelText = styled.div`
    margin-top:8px;
    font-size:8px
`;

class Result extends React.Component {
    constructor() {
        super();

        this.state = {
            title: "",
            description:"",
            imgsrc:"",
        };
    }
     
    render() {
        const result = _.sample(resultList[this.props.score||0])
    
        return (
            <Wrapper>
                <LevelText>
                    Your level is
                </LevelText>

                <GradationText fontSize={1.5} fontWeight= {"bold"}>
                    {result.name}
                </GradationText >
                {/* TODO 
                    - ADD percents
                */}
                Top 0.01%
                <ScoreText>
                    Score: {this.props.socre||0}/10
                </ScoreText>

                <Image src={result.imgSrc}/>

                <Description>
                    {result.description}
                </Description>

                <GradationText fontSize={0.7}>
                    Flex your level
                </GradationText>

                <ShareLink />

                <GradationButton color="white" onClick={()=>window.location.href = '/'}>
                    Start a new quiz
                </GradationButton>

                <GradationButton color="white" onClick={()=>window.location.href = '/'}>
                    Discuss the quiz with others
                </GradationButton>
                
                {/* TODO should fix default array for debugging([1,2]) */}
                <Answers answersList={this.props.answersList||[1,2,3,4,5,6,7,8,9,10]}/>
            </Wrapper>
        )
    };
}

export default Result;