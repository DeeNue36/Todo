import './styles.css'


function App() {

  return (
    <form className='new-item-form'>
      <h1>Todo App</h1>
      <div className='form-row'>
        <label htmlFor='item'>New Item</label>
        <input type='text' id='item'/>

      </div>
    </form>
  )
}

export default App
