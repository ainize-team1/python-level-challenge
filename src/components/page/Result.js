import React from 'react';
import styled from 'styled-components';
import _ from 'underscore'

import resultList from '../api/resultList'
import {GradationButton} from '../utils/Buttons.js'
import {GradationText} from '../utils/Texts.js'
import Answers from './Answers'

const TitleText = styled.div`
    margin-top: ${props => props.marginTop || 0}px;
    font-family: Roboto;
    font-size: 10px;
    line-height: 1.71;
    text-align: center;
    color: white;
`;
const imageStyle = {
    maxHeight:"400px",
    maxWidth:"300px",
    width:"90%",
    height:"100%"
}
class Result extends React.Component {
    constructor() {
        super();

        this.state = {
            title: "",
            description:"",
            imgsrc:"",
            
            
        };
    }
    componentDidMount(){
        const result = _.sample(resultList[this.props.score||0])
        this.setState({
        })
    }
    render() {
        return (<>
                <TitleText marginTop={10}>
                    Your level is
                </TitleText>
                <GradationText fontSize={1.5} fontWeight= {"bold"}>
                    {resultList[0][0].name}
                </GradationText >
                {/* TODO 
                - ADD percents
                */}
                <div style={{color:"grey", fontSize:"5px", margin:"5px"}}>
                    Score: {this.props.socre||0}/10
                </div>
                {/* 
                    TODO(DONGCHEOL)
                    - show score
                    - show percent
                    - add style description, title, image, button
                */}
                <img src={resultList[0][0].imgSrc} style={imageStyle}></img>
                <div style= {{color : "white", fontSize: "0.5rem", width: "90%", textAlign:"center" }}>
                    {resultList[0][0].description}
                </div>
                <GradationText fontSize={0.7}>
                    Flex your level
                </GradationText>

                {/* TODO 
                Share Link
                facebook, twitter ,link 
                */}
                <GradationButton color="white">
                    Start a new quiz
                </GradationButton>
                <GradationButton color="white">
                    Discuss the quiz with others
                </GradationButton>
                
                <Answers answersList={[1,2]}></Answers>

                </>
        );
    }
}

export default Result;