import React from 'react'
import MyContext from './MyContext'

class MyContextProvider extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            showAnswer: false,
            redirect: true,
        }
    }

    toggleAnswer = () => {
        this.setState(prevState => ({
            showAnswer: !prevState.showAnswer,
        }));
    }

    toggleRedirect = () => {
        this.setState(prevState => ({
            redirect: !prevState.redirect,
        }));
    }

    render() {
        const {showAnswer, redirect} = this.state;

        return (
            <MyContext.Provider value={{
                showAnswer: showAnswer,
                toggleAnswer: this.toggleAnswer,
                redirect: redirect,
                toggleRedirect: this.toggleRedirect,
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyContextProvider;
