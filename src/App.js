import Btn from './Btn'
import './App.css';
import Nav from './Nav';
import ModeToggler from './ModeToggler';

function Header(props) {
  return <h1>Hello {props.text}</h1>
}

function App(props) {
  return (
    <ModeToggler />
  );
}

export default App;
