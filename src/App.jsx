import React, { useState, useEffect } from 'react';

import './App.css';
import AddTodo from './components/AddTodo';
import { TodoList } from './components/TodoList';
import allTodos from './db/todos';

function App() {
  // console.log(allTodos());
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(4);

  const setDoneUndone = (id) => {
    // console.log('setDoneUndone', id);
    // id yra id to todo itemo kurio done dali norim pakeisti i ptriesinga
    // pasidarom todos kopija
    // surasti ta todo objekta
    // pakeisti jo done dali
    // nustatom todos su setTodos i kopija

    // one way
    // const todosCopy = [...todos];
    // const foundTodo = todosCopy.find(i => i.id === id);
    // foundTodo.done = !foundTodo.done;
    // setTodos(todosCopy)

    // second way
    const todosCopy = todos.map((i) => {
      return i.id === id ? { ...i, done: !i.done } : { ...i };
    });
    setTodos(todosCopy);
  };
  const handleDelete = (id) => {
    const todosCopy = todos.filter((t) => t.id !== id);
    setTodos(todosCopy);
  };
  const handleAddTodo = (title) => {
    // pridedam nauja item i todos nemodifikuodammi esamo
    setTodos([...todos, { id: todoId, title, done: false }]);
    setTodoId(todoId + 1);
  };

  const handleEditTodo = (id, title) => {
    // pakeisti title kur id yra lygus item id
    const todosCopy = todos.map((todo) => {
      return todo.id === id ? { ...todo, title } : { ...todo };
    });
    setTodos(todosCopy);
  };

  useEffect(() => {
    setTodos(allTodos());
  }, []);

  return (
    <div className="App">
      <h2>Todo list</h2>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList
        onDelete={handleDelete}
        onEditTodo={handleEditTodo}
        todos={todos}
        onDoneUndone={setDoneUndone}
      />
    </div>
  );
}

export default App;
