
import React from 'react';
import Toast from 'light-toast';
import { FaLink, FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';

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
            <>  <div style={{display:"flex"}}>
                    <div style={{marginRight:"15px"}}><FaFacebook size={32}/></div>
                    <div style={{marginRight:"15px"}}><AiFillTwitterCircle size={35.5}/></div>
                    <div onClick={() => {
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
                    }}style={{marginTop:"5px"}}><FaLink size={25}/> </div>
                </div>
            </>
        )
    }
}

export default ShareLink;