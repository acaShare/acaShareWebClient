import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import MainContainer from './MainContainer';
import NavBar  from './NavBar';
import Sidebar from './Sidebar';
import '../Styles/App.css';
import '../Styles/home.css';

const App = () =>
  <BrowserRouter>
    <>
      {/* <Redirect from="/" to="/universities" /> */}
      <NavBar />

      <div className="row home-container">
        <div className="col s12 m8 l9 home-part">
          <div className="data-container">
            <Route path="/" component={MainContainer} />
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  </BrowserRouter>

export default App