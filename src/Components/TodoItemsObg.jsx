import { useContext } from "react";
import { TodoItemContext } from "../store/todo-items-store";

import TodoItems from "./TodoItems";
function TodoItemsObg() {

  const { todoItems, onDelete } = useContext(TodoItemContext);

  return (
    <div>
      {todoItems.map((item, i) => (
        <TodoItems
          key={i}
          todoName={item.name}
          todoDate={item.time}
          onDelete={onDelete}
        ></TodoItems>
      ))
      }
    </div >
  )
}

export default TodoItemsObg;