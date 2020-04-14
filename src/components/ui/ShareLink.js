
import React from 'react';
import Toast from 'light-toast';
import styled from 'styled-components'
import { FaLink, FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';


const Grid = styled.div`  
    display: grid;
    width: 100%;
    max-width: 300px;
    grid-template-columns: auto auto auto;    
`;

const Row = styled.div`
    margin-left : 10px;
    font-size : 12px;
    text-align: center;
    padding-top : 2px;
`;

class ShareLink extends React.Component {
    constructor() {
        super();

        this.state = {
            title: "",
            description:"",
            imgsrc:"",
            
            
        };
    }
    render(){
        return(
            <>  
                <Grid>
                    <Row>
                        <FaFacebook size={32}/>
                    </Row>
                    <Row>
                        <AiFillTwitterCircle size={35.5}/>
                    </Row>
                    <Row onClick={() => {
                        Toast.info('URL copied to clipboard', 500, () => {
                            // do something after the toast disappears
                            const dummy = document.createElement('input'),
                                text = window.location.href;

                            document.body.appendChild(dummy);
                            dummy.value = text;
                            dummy.select();
                            document.execCommand('copy');
                            document.body.removeChild(dummy);
                        });
                    }}>
                        <FaLink size={25} style={{marginTop:"5.5px"}}/> 
                    </Row>
                </Grid>
            </>
        )
    };
}

export default ShareLink;