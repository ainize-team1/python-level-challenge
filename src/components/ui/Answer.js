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
`

const Row = styled.div`
    margin-left : 10px;
    font-size : 12px;
    text-align: left;
    padding-top : 2px;
`
class Answer extends React.Component {
    constructor() {
        super();

        this.state = {
            
        };
    }
    render() {
        const {title,qustionId, checkedAnwser, originalAnswer} = this.props.answer
        return (<>
                <Grid >
                    <Row> {this.props.index}</Row>
                    <Row> {title||`Question ${this.props.index}`}  ></Row>
                    <Row> {checkedAnwser===originalAnswer ? <FiCheckCircle color="#33CCFF"></FiCheckCircle>: <FaRegTimesCircle color="#FF6347"/>}<FaRegTimesCircle color="#FF6347"/></Row>
                </Grid>
            </>
        )
    }
}

export default Answer;