import React from 'react'
import MyContext from './MyContext'

class MyContextProvider extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            showAnswer: false,
        }
    }

    toggleAnswer = () => {
        this.setState(prevState => ({
            showAnswer: !prevState.showAnswer,
        }));
    }

    render() {
        const { showAnswer } = this.state;

        return (
            <MyContext.Provider value={{
                showAnswer: showAnswer,
                toggleAnswer: this.toggleAnswer,
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyContextProvider;
