import { useContext, useRef } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { TodoItemContext } from "../store/todo-items-store";
function AddTodo() {

  const { onNewItem } = useContext(TodoItemContext);
  const todoNameRef = useRef();
  const todoDateRef = useRef();

  const addBtnClicked = (e) => {
    e.preventDefault();
    let todoName = todoNameRef.current.value;
    let todoDate = todoDateRef.current.value;
    todoNameRef.current.value = '';
    todoDateRef.current.value = '';
    onNewItem(todoName, todoDate);
  }

  return <div className="container mb">
    <form className="row" onSubmit={addBtnClicked}>
      <div className="col-6">
        <input type="text" placeholder="Enter Todo Here" ref={todoNameRef} />
      </div>
      <div className="col-4">
        <input type="date" ref={todoDateRef} />
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-success"><IoIosAddCircle /></button>
      </div>
    </form>
  </div>
}

export default AddTodo;