import React from 'react';
import styled from 'styled-components';

import resultList from '../api/resultList'

const TitleText = styled.div`
    margin-top: ${props => props.marginTop || 0}px;
    font-family: Roboto;
    font-size: 15px;
    line-height: 1.71;
    text-align: center;
    color: ${props => props.theme[props.color] || props.theme.GREY};
`;

const GradationButton = styled.button`
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
  line-height: 1.5;
  margin: 5px;
  width: 100%;
  max-width: 400px;
  font-weight: 500;
  background: #ef4e28;
  background: linear-gradient(to right, #ef4e28 0%, #ec6d28 21%, #f7a358 74%, #f7c158 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;  

  border: 3px solid transparent;
  border-image: linear-gradient(to right, #ef4e28 0%, #ec6d28 21%, #f7a358 74%, #f7c158 100%);
  border-image-slice: 1;
  border-radius: 0.5rem;
  
`
class Result extends React.Component {
    constructor() {
        super();

        this.state = {
        };
    }
    

    render() {
        return (<>
                <TitleText marginTop={10} >
                    Your level is
                </TitleText>
                <div>
                    {resultList[0][0].name}
                </div>
                {/* 
                    TODO(DONGCHEOL)
                    - show score
                    - show percent
                    - add style description, title, image, button
                */}
                <img src={resultList[0][0].imgSrc} style={{width:"100%",height:"100%"}}></img>
                <div>
                    {resultList[0][0].description}
                </div>
                <GradationButton color="white">
                    Flex Now
                </GradationButton>

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
                see your answers
                {/* 
                    TODO (DONGCHEOL)
                    How to show my answers??
                    - see your ansers
                */}




                </>
        );
    }
}

export default Result;