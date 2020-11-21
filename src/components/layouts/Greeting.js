import React, { useContext } from 'react'

// Context
import { GlobalContext } from '../../context/GlobalState'

const style = {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3em'
}

const Greeting = () => {

    const { greeting } = useContext(GlobalContext)

    return (
        <div style={style}>
            {greeting}
        </div>
    )
}

export default Greeting
