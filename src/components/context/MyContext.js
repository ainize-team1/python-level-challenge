import React from 'react'

const MyContext = React.createContext({
    showAnswer: false,
    toggleAnswer: () => {},
    redirect: true,
    toggleRedirect: () => {},
});

export default MyContext
 