
import React from 'react';
import Toast from 'light-toast'
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
                    <div>F.... </div>
                    <div>T.... </div>
                    <div onClick={() => {
                        Toast.info('URL copied to clipboard', 500, () => {
                            // do something after the toast disappears
                        });
                    }}>L... </div>
                </div>
            </>
        )
    }
}

export default ShareLink;