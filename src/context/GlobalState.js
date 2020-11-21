import React, { createContext, useReducer } from 'react'
import MainReducer from './reducers/MainReducer'

const initialValue = {
    greeting: 'React with ContextAPI Boilerplate'
}

export const GlobalContext = createContext(initialValue)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(MainReducer, initialValue)

    return (
        <GlobalContext.Provider
            value={{
                greeting: state.greeting
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}