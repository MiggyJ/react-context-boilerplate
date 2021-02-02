import React from 'react'
// Context Provider
import { GlobalProvider } from './context/GlobalState'

// Pages
import Greeting from './pages/Greeting'

const App = () => {
  return (
    <GlobalProvider>
      <Greeting />
    </GlobalProvider>
  )
}

export default App

