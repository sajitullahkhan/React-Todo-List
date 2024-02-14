import AppName from './Components/AppName';
import AddTodo from './Components/AddTodo';
import TodoItemsObg from './Components/TodoItemsObg';
import TodoItemsContextProvider from './store/todo-items-store';
import Message from './Components/Message';
import "./App.css";

function App() {
  return (
    <TodoItemsContextProvider>
      <center>
        <AppName></AppName>
        <AddTodo></AddTodo>
        <Message></Message>
        <TodoItemsObg></TodoItemsObg>
      </center>
    </TodoItemsContextProvider>
  )
};

export default App;