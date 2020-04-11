import React from 'react';
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
        const renderedList = this.props.answersList.map((answer) =>{
            return <div>answer</div>;
        });
    
        return (<>
        
            <button onClick={ this.onClick} style={{color :"lightgrey", fontSize : "10px"}}> See your answers  {this.state.clicked ? "▲":"▼"}</button>
            {this.state.clicked ? renderedList: ""}
            
            </>
        )
    }
}

export default Answers;