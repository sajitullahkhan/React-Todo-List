import { useContext } from "react";
import { TodoItemContext } from "../store/todo-items-store";

const Message = () => {
  const {todoItems} = useContext(TodoItemContext)
      return (
        todoItems.length == 0 && <h2>Make your day Productive</h2>
      )
}

export default Message;