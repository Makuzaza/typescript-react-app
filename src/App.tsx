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
  
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    // console.log(text)
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Math.random().toString(), text: text }
    ])
    // setTodos([...todos, { id: Math.random().toString(), text: text }])
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }

  return <div className='App'>   
  Typescript - React
    {/* A component that adds a todo */}
    <NewTodo onAddTodo={todoAddHandler}/>
    <TodoList items = {todos} onDeleteTodo={todoDeleteHandler}/>
 </div>
}

export default App;
