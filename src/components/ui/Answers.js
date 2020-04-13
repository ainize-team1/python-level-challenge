import React from 'react';
import Answer from './Answer'


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
        const renderedList = this.props.answersList.map((answer,index) =>{
            return (
                    <Answer key={index} index={index+1} answer={answer}/>
            );
        });
    
        return (<>
        
            <div onClick={ this.onClick} style={{color :"grey", fontSize : "10px", paddingBottom : "7px"}}> {this.state.clicked ? "Hide your answers ▲":"See your answers ▼"}</div>
            {this.state.clicked ? renderedList: ""}
            
            </>
        )
    }
}

export default Answers;