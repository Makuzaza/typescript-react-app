import React from 'react';
import './todoList.css';

interface TodoListProps {
  items: { id: string; text: string }[];
  onEditTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  // const todos = [{id: 't1', text: 'Finish Typescript course'}];
  return (
    <ul>
    {props.items.map((todo) => (
      <li key={todo.id}>
        <span>{todo.text}</span>
        <div>
          <button onClick={props.onEditTodo.bind(null, todo.id)}>Edit</button>
          <button onClick={props.onDeleteTodo.bind(null, todo.id)}>
            Delete
          </button>
        </div>
      </li>
    ))}
  </ul>
  );
}

export default TodoList;