import { TodoListItems } from "./TodoListItems"

export const TodoList = ({ newTodos, toggleTodo, deleteTodo }) => {
    return (
        <ul className='list'>
            {newTodos.length === 0 && "No Todos...yet"}
            {newTodos.map(newTodo => {
                return (
                    <TodoListItems 
                        key={newTodo.id} 
                        {...newTodo}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                )
            })}
        </ul>
    )
}