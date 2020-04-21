import React from 'react'
import styled from 'styled-components'

const LevelText1 = styled.div`
    cursor: pointer;
    display: inline-block;
    padding: 2px;
    margin: 4px;
    width: 80%;
    background: linear-gradient(to right, #6f00cc 0%, #f2513c 100%);
    border-radius: 20px;
`
const LevelText2 = styled.div`
    display: inline-block;
    padding: 0 1px;
    height: 40px;
    width:99.5%;
    align: center;
    line-height: 40px;
    background: black;
    border-radius: 18px;
    transition: all ease 0.5s 0s;
    :hover{
        background: white;

    }
`
const LevelText3 = styled.div`
    font-weight: bold;
    font-size: 1rem;
    text-align: center;
    background: linear-gradient(to right, #6f00cc 0%, #f2513c 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
class GradationButton extends React.Component {
    constructor() {
        super();

        this.state = {
        };
    }

    render(){
        return( 
            <LevelText1 onClick={this.props.onClick}>
                <LevelText2>
                    <LevelText3>
                        {this.props.text}
                    </LevelText3>
                </LevelText2>
            </LevelText1>        
        )
    };
}

export default GradationButton;
