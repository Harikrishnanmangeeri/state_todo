import './App.css';
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]); 

  const addTodo = (e) => {
    e.preventDefault(); 

    const newTodo = e.target.todo.value;
    if (newTodo.trim() !== '') {
      setTodos([...todos, { task: newTodo }]);
      e.target.todo.value = '';
    }
  }

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }

  return (
    <div className="App">
    <h1>TODO APP</h1>
      <form onSubmit={addTodo}>
        <input placeholder="enter here" id='todo' type="text" />
        <button type='submit'>ADD</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.task}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
