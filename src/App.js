import Btn from './Btn'
import './App.css';
import HookExample from './HookExample';
import Homepage from './Homepage'
import AboutMe from './AboutMe'
import { Routes, Route } from 'react-router-dom'

function Header(props) {
  return <h1>Hello {props.text}</h1>
}

function App(props) {
  return (
    <div>
      <nav>
        <a>Homepage</a>
        <a>About Me</a>
      </nav>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about-me' element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
