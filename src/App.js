import logo from "./logo.svg";
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import AddToDo from "./components/AddToDo";

function App() {
  return <div className="App bg-dark text-center">
  <Header />
  <Icon.ArrowRight />
  <AddToDo />
  </div>;
}

export default App;
