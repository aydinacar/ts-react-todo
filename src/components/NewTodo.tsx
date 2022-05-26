import React, { useRef } from "react";
import "./NewTodo.css";
interface NewTodoProps {
  onAddTodo: (text: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    onAddTodo(enteredText);
  };
  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input id="todo-text" type="text" ref={textInputRef} />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default NewTodo;
