import React from "react";
import ToDoCard from "./ToDoCard";

export default function TodoList(props) {
  const { todo} = props;
  return (
    <ul className="main">
      {todo.map((todo, todoIndex) => (
        <ToDoCard {...props} key={todoIndex} index={todoIndex} >
          <p>{todo}</p>
        </ToDoCard>
      ))}
    </ul>
  );
}
