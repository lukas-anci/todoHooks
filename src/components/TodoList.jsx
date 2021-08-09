import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
  return (
    <div>
      <ul>
        {todos.map((t) => (
          <TodoItem item={t} key={t.id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
