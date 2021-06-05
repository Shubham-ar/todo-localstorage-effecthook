import TodoForm from './components/TodoForm';
import Todos from "./components/Todos";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { useState, useEffect } from 'react';
import { Container } from 'reactstrap';


function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      setTodos(JSON.parse(localTodos))
    }

  }, [])

  const addTodo = async todo => {
    setTodos([...todos, todo])
  }

  // if any variable in the given array is changed, run useEffect
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const markComplete = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Container fluid>
      <h1>TodoWithLocalStorage</h1>
      <TodoForm addTodo={addTodo} markComplete={markComplete} />
      <Todos todos={todos} />
    </Container>
  );
}

export default App;
