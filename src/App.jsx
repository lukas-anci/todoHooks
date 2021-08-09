import React, { useState, useEffect } from 'react';

import './App.css';
import TodoList from './components/TodoList';
import allTodos from './db/todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(allTodos());
  }, []);
  return (
    <div className="App">
      <h2>Todo list</h2>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
