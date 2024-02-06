import React, { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.modules';

// function App() {
//   return (
// <div>Typescript - React</div>
//   )
// }

const App: React.FC = () => {
  // const todos = [{ id: 't1', text: 'Finish Typescript course' }]
  
  const [todoState, setTodoState] = useState<string>('add');
  const [todo, setTodo] = useState<Todo>({ id: '', text: '' });
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    if (todoState === 'edit') {
      setTodos((prevTodos) => {
        return prevTodos.map((prevTodo) => {
          if (prevTodo.id === todo.id) {
            return todo;
          } else {
            return prevTodo;
          }
        });
      });
    } else {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Math.random().toString(), text: text },
      ]);
    }
    setTodo((prevTodo) => {
      return { ...prevTodo, id: '', text: '' };
    });
    setTodoState(() => {
      return '';
    });
  }

  const todoChangeHandler = (text: string) => {
    setTodo((prevTodo) => {
      return { ...prevTodo, text: text };
    });
  };
  const todoEditHandler = (id: string) => {
    setTodo((prevTodo) => {
      const todo = todos.filter((todo) => todo.id === id);
      const text = todo.length ? todo[0].text : '';
      return { ...prevTodo, id: id, text: text };
    });
    setTodoState(() => {
      return 'edit';
    });
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }

  return (
    <div className="App">
    <NewTodo
      text={todo.text}
      state={todoState}
      onChangeTodo={todoChangeHandler}
      onAddTodo={todoAddHandler}
    />
    <TodoList
      items={todos}
      onEditTodo={todoEditHandler}
      onDeleteTodo={todoDeleteHandler}
    />
  </div>)
}

export default App;
