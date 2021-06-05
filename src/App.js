import TodoForm from './components/TodoForm';
import Todos from "./components/Todos";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { useState } from 'react';
function App() {
  const [todos,setTodos]=useState([])
  return (
   <div>
     <h1>TodoWithLocalStorage</h1>
     <TodoForm/>
     <Todos addTodos/>
     <Todos addTodos/>
   </div>
  );
}

export default App;
