import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Nav/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

// function App() {
const App = () => {
  return (
    <div className= "wrapper">
      <Header />
      <Navbar />
      <div className= "wrapper__content">
        <Profile />
        {/* <Dialogs /> */}
      </div>
    </div>
  );
}

export default App;
