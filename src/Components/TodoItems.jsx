import { useContext } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { TodoItemContext } from "../store/todo-items-store";
function TodoItems({ todoName, todoDate }) {

  const { onDelete } = useContext(TodoItemContext)

  return <div className="container rb">
    <div className="row">

      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>

      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onDelete(todoName)}
        >
          <RiDeleteBinFill />
        </button>
      </div>
    </div>
  </div>
}

export default TodoItems;