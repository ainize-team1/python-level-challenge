import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    padding: 10%;
    position: relative;
`;

const Row = styled.div`
    margin-left: 10px;
    font-size: 10px;
    display: table-cell;
    vertical-align: middle;
`;

class Footer extends React.Component {
    constructor() {
        super();

        this.state = {
        };
    }

    render(){
        return( 
          // TODO (Add icon)
            <Wrapper>
                <Row>
                    Contribute on 
                </Row>
                
                <Row>
                    Live on  
                </Row>
            </Wrapper>        
        )
    };
}

export default Footer;