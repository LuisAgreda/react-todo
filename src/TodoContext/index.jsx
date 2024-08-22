import React from 'react'
import { useLocalStoreage } from '../hooks/useLocalStorage'

const TodoContext = React.createContext()

function TodoProvider({ children }) {
  const {
    items: todos,
    saveItems: setTodos,
    loading,
    error
  } = useLocalStoreage('TODOS_V1', [])

  const [searchValue, setSearchValue] = React.useState('')
  const [openModal, setOpenModal] = React.useState(false)
  const [showWarning, setShowWarning] = React.useState(false)

  const completedTodos = todos.filter(todo => todo.completed).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter(todo => {
    const normalizedValue = searchValue.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    const normalizedTodo = todo.text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

    return normalizedTodo.includes(normalizedValue)
  })

  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text === text)
    newTodos[todoIndex].completed = true
    setTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = todos.findIndex(todo => todo.text === text)
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }

  const createTodo = () => {
    const newTodos = [...todos]
    const textField = document.getElementById('textField')
    const text = textField.value

    if (text) {
      const newTodo = { text, completed: false }

      newTodos.unshift(newTodo)

      setTodos(newTodos)
      setOpenModal(false)
      setShowWarning(false)
    } else {
      setShowWarning(true)
    }
  }

  const closeModal = () => {
    setOpenModal(false)
    setShowWarning(false)
  }

  const context = {
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    createTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    showWarning,
    setShowWarning,
    closeModal,
    loading,
    error
  }

  return (
    <TodoContext.Provider value={context}>
      { children }
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }
