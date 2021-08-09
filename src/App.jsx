import React, { useState, useEffect } from 'react';

import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import allTodos from './db/todos';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(4);

  const handleAddTodo = (title) => {
    console.log('add', title);
    // if (!title) return console.log('ner title');
    //pridedam nauja itema i todos nemodifikuodami esamo

    setTodos([...todos, { id: todoId, title, done: false }]);
    setTodoId(todoId + 1);
  };

  const handleEditTodo = (id, title) => {};

  const setDoneUndone = (id) => {
    // const todoCopy = [...todos];
    // const findbyid = todoCopy.find((t) => t.id === id);

    // findbyid.done = !findbyid.done;
    // setTodos(todoCopy);

    const todosCopy = todos.map((i) => {
      return i.id === id ? { ...i, done: !i.done } : { ...i };
    });
    setTodos(todosCopy);
  };

  useEffect(() => {
    setTodos(allTodos());
  }, []);
  return (
    <div className="App">
      <h2>Todo list</h2>
      <AddTodo handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} onDoneUndone={setDoneUndone} />
    </div>
  );
}

export default App;
