import React from 'react'

import { AppUI } from './AppUI'

import './index.css'
import { TodoProvider } from '../TodoContext'

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App
