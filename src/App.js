import Btn from './Btn'
import './App.css';
import HookExample from './HookExample';

function Header(props) {
  return <h1>Hello {props.text}</h1>
}

function App(props) {
  return (
    <HookExample />
  );
}

export default App;
