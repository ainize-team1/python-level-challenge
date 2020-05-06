
import React from 'react';
import styled from 'styled-components';
import { 
    FacebookShareButton,
    TwitterShareButton,
} from 'react-share';

// TODO Change Icon
// import facebookIcon from '../../static/img/shareIcon/Facebook.svg';
// import twitterIcon from '../../static/img/shareIcon/Twitter.svg';
// import copyIcon from '../../static/img/shareIcon/Copy.svg';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Wrapper = styled.div`
    display: table;
    border-spacing: 30px 6px;
    margin: 10px auto;
    margin-bottom: 30px;
`;

const Row = styled.div`
    cursor: pointer;
    display: table-cell;
    vertical-align: middle;
    align: center;
`;

const Icon = styled.img`
    vertical-align: middle;
`;

class ShareLink extends React.Component {
    constructor() {
        super();

        this.state = {
            clicked: false,
            href: '',
        };
    }

    componentDidMount = () => {
        this.setState({ href: window.location.href });
    }

    handleClickOpen = () => {
        this.setState({ clicked: true });
    };
    
    handleClose = () => {
        this.setState({ clicked: false });
    };

    render(){
        const { href } = this.state;

        return(
            <Wrapper>
                {/* TODO ADD URL */}
                <Row>
                    <FacebookShareButton url={href}>
                        <Icon src={'../../static/img/shareIcon/Facebook.svg'} />
                    </FacebookShareButton>
                </Row>

                <Row>
                    <TwitterShareButton url={href}>
                        <Icon src={'../../static/img/shareIcon/Twitter.svg'} />
                    </TwitterShareButton>
                </Row>

                <Row onClick={this.handleClickOpen}>
                    <Icon src={'../../static/img/shareIcon/Copy.svg'} />
                </Row>

                <Dialog
                    open={this.state.clicked}
                    onClose={this.handleClose}
                    aria-labelledby='alert-dialog-title'
                    aria-describedby='alert-dialog-description'>
                    <DialogTitle id='alert-dialog-title'>
                        {'URL copied to clipboard'}
                    </DialogTitle>

                    <DialogContent>
                        <DialogContentText
                            id='alert-dialog-description'
                            style={{overflow: "hidden", textOverflow: "ellipsis"}}>
                            {href}
                        </DialogContentText>
                    </DialogContent>

                    <DialogActions>
                        <CopyToClipboard text={href}>
                            <Button onClick={this.handleClose} variant='contained' color='primary'>
                                {'Ok'}
                            </Button>
                        </CopyToClipboard>
                    </DialogActions>
                </Dialog>
            </Wrapper>
        )
    };
}

export default ShareLink;