import { useReducer } from "react";
import { createContext } from "react";
export const TodoItemContext = createContext({
  todoItems: [],
  onNewItem: () => { },
  onDelete: () => { }
});

const todoItemsReducer = (currentState, action) => {

  let newTodoItems = currentState;

  if (action.type === "NEW_ITEM") {

    newTodoItems = [{ name: action.payload.itemName, time: action.payload.itemDate },...newTodoItems]

  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currentState.filter((item) => item.name !== action.payload.todoName);
  }
  return newTodoItems;
}

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodo] = useReducer(todoItemsReducer, []);

  const onNewItem = (itemName, itemDate) => {

    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDate
      }
    };

    dispatchTodo(newItemAction);
  }

  const onDelete = (todoName) => {

    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoName,
      }
    };
    dispatchTodo(deleteItemAction);
  }
  return (
    <TodoItemContext.Provider
      value={{
        todoItems,
        onNewItem,
        onDelete
      }}

    >
      {children}
    </TodoItemContext.Provider>
  );
};

export default TodoItemsContextProvider;