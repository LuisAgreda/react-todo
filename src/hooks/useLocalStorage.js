import React from 'react'

function useLocalStoreage(itemName, initialValue) {

  const[items, setItems] = React.useState(initialValue)
  const[loading, setLoading] = React.useState(true)
  const[error, setError] = React.useState(false)

  React.useEffect(() => {
    let parsedItems

    const TIME_OUT = 2000

    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(itemName)

        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItems = initialValue
        } else {
          parsedItems = JSON.parse(localStorageItems)
          setItems(parsedItems)
        }

        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    }, TIME_OUT)
  }, [itemName, initialValue])

  const saveItems = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems))

    setItems(newItems)
  }

  // localStorage.removeItem('TODOS_V1')

  // const defaultTodos = [
  //   { text: 'Cortar cebolla', completed: true },
  //   { text: 'Tomar el curso de intro a React', completed: false },
  //   { text: 'Llorar con la llorona', completed: false },
  //   { text: 'LALALALALALALALALA', completed: false }
  // ]

  // localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))

  return {
    items,
    saveItems,
    loading,
    error
  }
}

export { useLocalStoreage }
