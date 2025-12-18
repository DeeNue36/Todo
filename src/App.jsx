import { useState, useEffect } from 'react'
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import './styles.css'


function App() {
  const [newTodos, setNewTodos] = useState(() => {
    const localValue = localStorage.getItem('todos');
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }, [newTodos])

  function addTodo(title) {
    setNewTodos((currentTodos) => {
      return [
          ...currentTodos,
          {
          id:crypto.randomUUID(),
          title,
          completed: false
          }
      ]
    })
  }

  function toggleTodo(id, completed) {
    setNewTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }
        return todo;
      })
    })
  }

  function deleteTodo(id) {
    setNewTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <TodoForm addTodo={addTodo}/>
      <h2 className='header'>Todo List</h2>
      <TodoList newTodos={newTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}

export default App
