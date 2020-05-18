import React from 'react'
import Context from './Context'

class ContextProvider extends React.Component{
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
        this.setState(() => ({
            redirect: false,
        }));
    }

    render() {
        const { showAnswer, redirect } = this.state;

        return (
            <Context.Provider value={{
                showAnswer: showAnswer,
                toggleAnswer: this.toggleAnswer,
                redirect: redirect,
                toggleRedirect: this.toggleRedirect,
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default ContextProvider;
