import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDoneUndone }) => {
  return (
    <div>
      <ul>
        {todos.map((t) => (
          <TodoItem item={t} key={t.id} onDoneUndone={onDoneUndone} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
