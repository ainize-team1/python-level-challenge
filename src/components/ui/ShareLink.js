
import React from 'react';
import Toast from 'light-toast';
import styled from 'styled-components'
import { FaLink } from 'react-icons/fa';
import { 
    FacebookShareButton,
    TwitterShareButton,
    FacebookIcon,
    TwitterIcon,
} from "react-share";

const Wrapper = styled.div`
    display: table;
    border-spacing: 30px 6px;
    margin: 0 auto;
`;

const Row = styled.div`
    display: table-cell;
    vertical-align: middle;
    align: center;
`;

class ShareLink extends React.Component {
    constructor() {
        super();

        this.state = {
            title: "",
            description: "",
            imgsrc: "",
        };
    }

    render(){
        return(
            <Wrapper>
                {/* TODO ADD URL */}
                <Row>
                    <FacebookShareButton url={ window.location.href }>
                        <FacebookIcon size={32} round={true}/>
                    </FacebookShareButton>
                </Row>

                <Row>
                    <TwitterShareButton url={ window.location.href }>
                        <TwitterIcon size={32} round={true}/>
                    </TwitterShareButton>
                </Row>

                <Row onClick={() => {
                    Toast.info('URL copied to clipboard', 500, () => {
                        const dummy = document.createElement('input'),
                        text = window.location.href;

                        document.body.appendChild(dummy);
                        dummy.value = text;
                        dummy.select();
                        document.execCommand('copy');
                        document.body.removeChild(dummy);
                    });
                }}>
                    <FaLink size={26}/> 
                </Row>
            </Wrapper>
        )
    };
}

export default ShareLink;