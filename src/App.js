import logo from './logo.svg';
import './App.css';
import Nav from './Nav';

function Header(props) {
  return <h1>Hello {props.text}</h1>
}

function App(props) {
  return (
    <>
      <Header text="My Header"/>
      <Nav />
      <h1 className="App" >{props.title}</h1>
    </>
  );
}

export default App;
