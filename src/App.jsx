import { useState } from 'react'
import './styles.css'


function App() {
  const [newItem, setNewItem] = useState('');
  const [newTodos, setNewTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setNewTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id:crypto.randomUUID(),
          title: newItem,
          completed: false
        }
      ]
    })

    setNewItem('');
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
      <form onSubmit={handleSubmit} className='new-item-form'>
        <h1>Todo App</h1>
        <div className='form-row'>
          <label htmlFor='item'>New Item</label>
          <input 
            type='text' 
            value={newItem} 
            id='item'
            onChange={e => setNewItem(e.target.value)}
          />
        </div>
        <button className='btn'>Add</button>
      </form>
      <h2 className='header'>Todo List</h2>
      <ul className='list'>
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
