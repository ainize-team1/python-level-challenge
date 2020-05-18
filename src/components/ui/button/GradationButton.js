import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    cursor: pointer;
    display: inline-block;
    padding: 2px;
    margin: 4px;
    width: 90%;
    background: linear-gradient(to right, #AD1DF0 0%, #f2513c 100%);
    border-radius: 20px;
    margin-bottom: 1em;
`

const Background = styled.div`
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

const GradientText = styled.div`
    font-weight: bold;
    font-size: 1rem;
    text-align: center;
    background: linear-gradient(to right, #AD1DF0 0%, #f2513c 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 1000px) {
        font-size: 1.2rem;
    }
`

class GradationButton extends React.Component {
    constructor() {
        super();

        this.state = {
        };
    }

    render(){
        return( 
            <Wrapper onClick={this.props.onClick}>
                <Background>
                    <GradientText>
                        {this.props.text}
                    </GradientText>
                </Background>
            </Wrapper>        
        )
    };
}

export default GradationButton;
