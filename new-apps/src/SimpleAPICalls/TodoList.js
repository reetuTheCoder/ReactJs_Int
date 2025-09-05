import React from 'react'
import useFetch from './CustomHook/useFetch';

const TodoList = () => {
  const {
    data: todos,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/todos");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
       <h1>Todo list Disply throw Custom Hooks</h1>
        <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList