import logo from './logo.svg';
import { Container } from 'reactstrap';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const localTodos = localStorage.getItem("todos")
    if (localTodos) {
      setTodos(JSON.parse(localTodos))
    }
  }, [])


  const markComplete = id => {
    setTodos(todos.filter(todo => todo.id !== id))

    toast.warn("Todo Removed Succesfully", {
      position: toast.POSITION.TOP_RIGHT
    });
  }

  const addTodo = async todo => {
    setTodos([...todos, todo])
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <div>

      <Container>
        <h1>Todo App With Local Storage</h1>
        <TodoForm addTodo={addTodo} />
        <Todos todos={todos} markComplete={markComplete} />
      </Container>
      <ToastContainer />
    </div>

  );
}

export default App;
