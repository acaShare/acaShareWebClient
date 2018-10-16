import React, { Component } from 'react';
import Navigation from '../Components/Navigation';
import Home from '../Components/Home';
import Sidebar from '../Components/Sidebar';
import '../Styles/App.css';
import '../Styles/home.css';

class App extends Component {
  render() {
    return (
      <>
        <Navigation/>

        <div className="row home-container">
            <Home />
            <Sidebar />
        </div>
      </>
    );
  }
}

export default App;
