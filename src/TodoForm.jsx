import { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
    const [newItem, setNewItem] = useState('');


    function handleSubmit(e) {
        e.preventDefault();
        if (newItem === '') return; // if (!newItem) return; // return if the newItem is empty

        addTodo(newItem);

        setNewItem('');
    }

    return (
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
    )
}