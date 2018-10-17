import React from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import NavBar  from './NavBar';
import MainContainer from './MainContainer';
import Sidebar from './Sidebar';
import '../Styles/App.css';
import '../Styles/home.css';

const App = () => 
  <BrowserRouter>
    <>
      <NavBar />

      <div className="row home-container">
        <div className="col s12 m8 l9 home-part">
          <div className="data-container">
            <Redirect from="/" to="/universities" />
            <Route path="/universities" component={MainContainer}/>
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  </BrowserRouter>

export default App;
