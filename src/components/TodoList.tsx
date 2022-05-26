import React from "react";
import Todo from "../interfaces/Todo";
import "./TodoList.css";
interface TodoListProps {
  items: Todo[];
  onDeleteTodo: (todoId: string) => void;
}
const TodoList: React.FC<TodoListProps> = ({ items, onDeleteTodo }) => {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={onDeleteTodo.bind(null, todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
