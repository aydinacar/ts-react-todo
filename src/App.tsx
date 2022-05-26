import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import Todo from "./interfaces/Todo";
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: `t${Math.random()}`, text }];
    });
  };
  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };
  return (
    <div className="App">
      <h1 style={{ margin: "2rem" }}>TS REACT </h1>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
