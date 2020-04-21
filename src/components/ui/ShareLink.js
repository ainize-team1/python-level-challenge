
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

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';





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
            clicked: false,
        };
    }

    handleClickOpen = () => {
        this.setState({clicked: true});
    };
    
    handleClose = () => {
        this.setState({clicked: false});
    };

    copyToClipboard = () => {

    };
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

                <Row onClick={this.handleClickOpen}>
                    <FaLink size={26}/> 
                </Row>
                <Dialog
                    open={this.state.clicked}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">
                        URL copied to clipboard
                    </DialogTitle>

                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {window.location.href}
                        </DialogContentText>
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={this.copyToClipboard} color="primary">
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
            </Wrapper>
        )
    };
}

export default ShareLink;