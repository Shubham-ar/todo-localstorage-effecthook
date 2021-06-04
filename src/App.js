import "bootstrap/dist/css/bootstrap.min.css"
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import Todos from "./components/Todos";
function App() {
  return (
   <div>
     <TodoForm/>
     <Todos/>
   </div>
  );
}

export default App;
