import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaRegTimesCircle, FaRegCheckCircle } from 'react-icons/fa';
import questionsList from '../../static/json/python.json';
import answerList from '../../static/json/python_answer.json';
import Context from '../context/Context';

const Grid = styled.div`  
    display: grid;
    width: 100%;
    background: #191919;
    padding: 10px;
    grid-template-columns: 40px auto 40px;
    font-size: 1rem;
`;

const Row = styled.div`
    margin-left: 10px;
    padding-top: 2px;
    text-align: ${props => props.textAlign || "left"};
`;

const ShowAnswerList = styled.div`
    color: grey;
    font-size: 1rem;
    paddingBottom: 8px;
    margin-top: 16px;
    margin-bottom: 16px;
`;

class Answers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    renderList = () => this.props.answerSheet[0].map((result, index) => {
        const id = result;
        const selected = this.props.answerSheet[1][index];
        const subject = questionsList[id-1].Subject;
        const answer = answerList[id-1].Answer;

        return (
            <Grid key={index}>
                <Row>
                    {index+1}
                </Row>

                <Link
                    style={{color: 'white', textDecoration: 'none',}}
                    to={{pathname: '/answer', state: {id, selected},}}>
                    <Row>
                        { subject || `Question ${index+1}` } >
                    </Row>
                </Link>

                <Row textAlign='center'>
                    {answer === selected ?
                        <FaRegCheckCircle color='#33CCFF'/> :
                        <FaRegTimesCircle color='#FF6347'/>}
                </Row>
            </Grid>
        );
    });
    render() {
        const { showAnswer, toggleAnswer } = this.context;

        return (
            <>
                <ShowAnswerList onClick={toggleAnswer}>
                    {showAnswer ? 'Hide your answers ▲':'See your answers ▼'}
                </ShowAnswerList>

                {showAnswer && this.renderList()}
            </>
        )
    };
}

Answers.contextType = Context;

export default Answers;
