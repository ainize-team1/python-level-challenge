import React from 'react';
import styled from 'styled-components';
import _ from 'underscore'

import resultList from '../api/resultList'
import {GradationButton} from '../utils/Buttons.js'
import {GradationText} from '../utils/Texts.js'
import ShareLink from './ShareLink'
import Answers from './Answers'

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
     
    render() {
        const result = _.sample(resultList[this.props.score||0])
    
        return (<>
                
                <div style= {{marginTop:"8px", fontSize:"8px"}}>
                    Your level is
                </div>

                <GradationText fontSize={1.5} fontWeight= {"bold"}>
                    {result.name}
                </GradationText >
                {/* TODO 
                    - ADD percents
                */}
                <div> Top 0.01%</div>
                <div style={{color:"grey", fontSize:"5px", margin:"5px"}}>
                    Score: {this.props.socre||0}/10
                </div>
                <img src={result.imgSrc} style={imageStyle}></img>
                <div style= {{color : "white", fontSize: "0.5rem", width: "90%", textAlign:"center" }}>
                    {result.description}
                </div>
                <GradationText fontSize={0.7}>
                    Flex your level
                </GradationText>

                <ShareLink></ShareLink>

                <GradationButton color="white" onClick={()=>window.location.href = '/'}>
                    Start a new quiz
                </GradationButton>

                <GradationButton color="white" onClick={()=>window.location.href = '/'}>
                    Discuss the quiz with others
                </GradationButton>
                
                {/* TODO should fix default array for debugging([1,2]) */}
                <Answers answersList={[this.props.answersList||1,2]}></Answers>

                </>
        );
    }
}

export default Result;