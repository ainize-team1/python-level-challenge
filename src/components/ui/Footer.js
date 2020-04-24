import React from 'react';
import styled from 'styled-components';
// TODO : Chnage these value to icon
// import ainize from '../../static/img/footer/Ainize.svg';
// import github from '../../static/img/footer/Github.svg';

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

const Icon = styled.img`
    vertical-align: middle;
    margin-left: 10px;
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
                    {'Contribute on'}

                    <Icon src={'../static/img/footer/Github.svg'} />
                </Row>
                <Row>
                    {'Live on'}

                    <Icon src={'../static/img/footer/Ainize.svg'} />
                </Row>
            </Wrapper>        
        )
    };
}

export default Footer;