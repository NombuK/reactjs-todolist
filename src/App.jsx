import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import { useState, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function persistData(newList) {
    localStorage.setItem("todo", JSON.stringify({ todo: newList }));
  }

  function handleAddTodo(newTodo) {
    const newTodoList = [...todo, newTodo];
    persistData(newTodoList);
    setTodo(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todo.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodoList);
    setTodo(newTodoList);
  }

  function handleEditTodo(index) {
    const valueToBeEditted = todo[index];
    setTodoValue(valueToBeEditted);
    handleDeleteTodo(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodo = localStorage.getItem("todo");
    if (!localTodo) {
      return;
    }
    localTodo = JSON.parse(localTodo).todo;
    setTodo(localTodo);
  }, []);

  return (
    <>
      <ToDoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodo={handleAddTodo}
      />
      <ToDoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        todo={todo}
      />
    </>
  );
}

export default App;
