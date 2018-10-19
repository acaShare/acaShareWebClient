import React from 'react';
import { Route, NavLink } from "react-router-dom";
import Universities from './Universities';
import Departments from './Departments';
import Lessons from './Lessons';

class MainContainer extends React.Component {
  state = {
    elements: []
  }

  componentDidMount() {
    fetch(`https://localhost:44349/api/v1/universities`)
      .then(res => res.json())
      .then(json => this.setState({elements: json}));
  }

  render() {
    var pathArray = this.props.location.pathname.split('/');
    pathArray = pathArray.filter(p => p !== "universities" && p !== "departments" && p !== "lessons");
    let i = pathArray.length-1;
    pathArray[0] = "Uczelnie";
    
    return (
      <>
        <nav className="colornav">
          <div className="nav-wrapper path-header-wrapper">
            <div className="col s12 subsite-title">
              {pathArray.map((loc, key) => <NavLink key={key} to={this.props.location.pathname.split("/").slice(0,this.props.location.pathname.split("/").length-(i--)*2).join("/")} className="breadcrumb">{loc}</NavLink>)}
            </div>
          </div>
        </nav>

        <div className="home-content">
          <ul className="collection">
            <Route 
              exact 
              path="/universities" 
              component={(props) => <Universities {...props} elements={this.state.elements} />} 
            />
            <Route 
              exact 
              path="/universities/:univName/departments"
              component={(props) => <Departments {...props} elements={this.state.elements} /> }
            />
            <Route 
              exact 
              path="/universities/:univName/departments/:deptName/lessons"
              component={(props) => <Lessons {...props} elements={this.state.elements} />} 
            />
          </ul>
        </div>
      </>
    );
  }
}

export default MainContainer