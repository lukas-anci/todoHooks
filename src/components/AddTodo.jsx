import React, { useState } from 'react';

export default function AddTodo({ handleAddTodo }) {
  const [title, setTitle] = useState('');

  function sendtodo() {
    if (!title) return console.error('enter title');
    handleAddTodo(title);
    setTitle('');
  }
  return (
    <div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Add new todo"
      />
      <button onClick={sendtodo}>Add</button>
    </div>
  );
}
