import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import styled, { withTheme } from 'styled-components'
import {FiCheckCircle} from 'react-icons/fi'
import {FaRegTimesCircle} from 'react-icons/fa'

const base64url = require('base64-url');

const Grid = styled.div`  
    display: grid;
    width: 80%;
    background: #191919;
    grid-template-columns: 40px auto 40px;
`;

const Row = styled.div`
    margin-left : 10px;
    font-size : 12px;\
    padding-top : 2px;
    text-align: ${props => props.textAlign || "left"};
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
            clicked: false,
        };
    }

    onClick= ()=>{
        if(this.state.clicked) this.setState({clicked:false})
        else this.setState({clicked: true})
    }

    render() {
        const {title, qustionId, checkedAnwser, originalAnswer} = this.props.answersList;

        const renderedList = this.props.answersList.map( (answer, index) => {

            return (
                <Grid key={ index } >
                    <Row>
                        {index+1}
                    </Row>

                    <Row>
                        <Link 
                            style={ {color: "white", textDecoration: "none",} } 
                            to={ {pathname: '/answer', state: { answer },} }
                        >
                            {title|| `Question ${index+1}` } >
                        </Link>
                    </Row>

                    <Row textAlign="center"> 
                        {checkedAnwser === originalAnswer ?
                            <FiCheckCircle color= "#33CCFF"/> :
                            <FaRegTimesCircle color= "#FF6347"/>}
                    </Row>
                </Grid>
            );
        });
    
        return (
            <>
                <ShowAnswerList onClick= { this.onClick }>
                    {this.state.clicked ? "Hide your answers ▲":"See your answers ▼"}
                </ShowAnswerList>

                {this.state.clicked ? renderedList: ""}
            </>
        )
    };
}

export default Answers;
