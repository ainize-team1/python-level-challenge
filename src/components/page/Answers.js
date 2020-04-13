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
        const renderedList = this.props.answersList.map((answer,index) =>{
            return <div key={index}>answer</div>;
        });
    
        return (<>
        
            <div onClick={ this.onClick} style={{color :"grey", fontSize : "10px"}}> {this.state.clicked ? "Hide your answers ▲":"See your answers ▼"}</div>
            {this.state.clicked ? renderedList: ""}
            
            </>
        )
    }
}

export default Answers;