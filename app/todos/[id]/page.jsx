import React from 'react'

const fetchTodo = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const todo = await res.json();

    return todo;
}

const TodoPage = async ({params}) => {

  const {id} = params;

  const todo = await fetchTodo(id);

  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
        <p>
            #{todo.id}: {todo.title}
        </p>
        <p>Completed: {todo.completed ? "✅": "❌"}</p>
        <p className="border-todo border-black mt-5 text-right">
            By User: {todo.userId}
        </p>
    </div>
  )
}

export default TodoPage