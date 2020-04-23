import React from 'react'

const MyContext = React.createContext({
    showAnswer: false,
    toggleAnswer: () => {},
});

export default MyContext
 