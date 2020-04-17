import React from 'react';
import styled from 'styled-components'
import {FiCheckCircle} from 'react-icons/fi'
import {FaRegTimesCircle} from 'react-icons/fa'

const Grid = styled.div`  
    display: grid;
    width: 100%;
    max-width: 300px;
    background: #191919;
    grid-template-columns: 40px auto 40px;
`;

const Row = styled.div`
    margin-left : 10px;
    font-size : 12px;
    text-align: left;
    padding-top : 2px;
`;


const ShowAnswerList = styled.div`
    color:grey;
    font-size:10px;
    paddingBottom:7px;
`;

class Answers extends React.Component {
    constructor() {
        super();

        this.state = {
            clicked: false
            
        };
    }
    onClick= ()=>{
        if(this.state.clicked) this.setState({clicked:false})
        else this.setState({clicked: true})
    }
    render() {
        const {title,qustionId, checkedAnwser, originalAnswer} = this.props.answer||"TEST";
        const renderedList = this.props.answersList.map((answer,index) =>{
            return (
                
                <Grid key={index}>
                    <Row>
                        {index+1}
                    </Row>

                    <Row> 
                        {title||`Question ${index+1}`}  >
                    </Row>
                    <Row> 
                        {checkedAnwser===originalAnswer ? 
                            <FiCheckCircle color="#33CCFF"/>:
                            <FaRegTimesCircle color="#FF6347"/>}
                        <FaRegTimesCircle color="#FF6347"/>
                    </Row>
                </Grid>
            
            );
        });
    
        return (
            <>
                <ShowAnswerList onClick={ this.onClick}>
                    {this.state.clicked ? "Hide your answers ▲":"See your answers ▼"}
                </ShowAnswerList>
                {this.state.clicked ? renderedList: ""}
            
            </>
        )
    };
}

export default Answers;