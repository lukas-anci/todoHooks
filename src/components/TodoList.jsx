import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  return (
    <div>
      <ul>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </div>
  );
};

export default TodoList;
