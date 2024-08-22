import React from 'react'
import './index.css'
import { TodoContext } from '../../TodoContext'

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext)
  return (
    <input
      placeholder="Escribe un TODO"
      value={ searchValue }
      onChange={ (event) => setSearchValue(event.target.value) } />
  )
}

export { TodoSearch }
