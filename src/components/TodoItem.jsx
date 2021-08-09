import React, { useState } from 'react';

const TodoItem = ({ item, onDoneUndone }) => {
  // sukurti editTitle state
  // sujungti ji su ivesties lauku
  // salyginai rodyti input arba span
  return (
    <li className="cur-pointer">
      <span
        onClick={() => onDoneUndone(item.id)}
        className={item.done ? 'item-done' : ''}
      >
        {item.title}
      </span>
      <input type="text" />
      <i className="fa fa-pencil"></i>
    </li>
  );
};

export default TodoItem;
