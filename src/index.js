import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const posts = [
  { id: 1, message: "Hey! How are you?", likes: 15},
  { id: 2, message: "Have a nice day!", likes: 20 },
  { id: 3, message: "React props", likes: 1 }
]


const dialogs = [
  {id: 1, name: "Vita"},
  {id: 2, name: "Lily"},
  {id: 3, name: "Alina"},
  {id: 4, name: "Kate"},
]

const messages = [
  {id: 1, message: "Hi!"},
  {id: 2, message: "How are you?"},
  {id: 3, message: "Good luck!"}
]



ReactDOM.render(
  <React.StrictMode>
    <App posts= {posts} dialogs= {dialogs} messages= {messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
