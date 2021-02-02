import React from 'react'
// Context Provider
import { GlobalProvider } from './context/GlobalState'

// Pages
import Home from './pages/Home'

const App = () => {
  return (
    <GlobalProvider>
      <Home />
    </GlobalProvider>
  )
}

export default App

