import { useState } from 'react'
import { TodoForm } from './TodoForm';
import './styles.css'


function App() {
  const [newTodos, setNewTodos] = useState([]);

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
      <ul className='list'>
        {newTodos.length === 0 && "No Todos...yet"}
        {newTodos.map(newTodo => {
          return (
            <li key={newTodo.id}>
              <label>
                <input 
                  type='checkbox' 
                  checked={newTodo.completed} 
                  onChange={e => toggleTodo(newTodo.id, e.target.checked)}
                />
                {newTodo.title}
              </label>

              <button 
                onClick={() => deleteTodo(newTodo.id)} 
                className='btn btn-danger'
              >
                Delete
                </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App
