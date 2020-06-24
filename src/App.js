import React, {Component} from 'react';
import './App.css';

// function App() {
const App = () =>  {
  return (
    <div>
      <Header />
      <Technologies />
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <a href= "#">Home</a>
      <a href= "#">About</a>
      <a href= "#">Contact</a>
    </div>
  )
}

const Technologies = () => {
  return (
    <div>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>React</li>
      </ul>
    </div>
  )
}

export default App;
