import React from 'react'
// Context Provider
import { GlobalProvider } from './context/GlobalState'

// Components
import Greeting from './components/layouts/Greeting'

const App = () => {
  return (
    <GlobalProvider>
      <Greeting />
    </GlobalProvider>
  )
}

export default App

