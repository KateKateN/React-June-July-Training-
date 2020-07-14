import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Nav/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';

// function App() {
const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Navbar />
        <div className= "wrapper__content">
          {/* <Route path= '/profile' component= {Profile} /> */}
          {/* <Route path= '/dialogs' component= {Dialogs} /> */}

          <Route path= '/profile' component= {() => <Profile posts = {props.posts}/>} />
          <Route path= '/dialogs' component= {() => <Dialogs dialogs= {props.dialogs} messages= {props.messages}/>} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
