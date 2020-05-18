import React from 'react'

const Context = React.createContext({
    showAnswer: false,
    toggleAnswer: () => {},
    redirect: true,
    toggleRedirect: () => {},
});

export default Context
 