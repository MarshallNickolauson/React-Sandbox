import Btn from './Btn'
import './App.css';
import Nav from './Nav';

function Header(props) {
  return <h1>Hello {props.text}</h1>
}

function App(props) {
  return (
    <Btn />
  );
}

export default App;
