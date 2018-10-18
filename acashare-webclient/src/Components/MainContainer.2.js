import React from 'react';
import { Route, NavLink } from "react-router-dom";
import ListTypes from '../Common/ListTypes.js';
import UniversityTreeList from './UniversityTreeList';

class MainContainer2 extends React.Component {
  state = {
    elements: [],
    didmount: false
  }

  getElementsFromPath = (path) => {
    console.log(path);
    
    fetch(`https://localhost:44349/api/v1${path}`)
      .then(res => res.json())
      .then(json => this.setState({elements: json}));
  }

  componentDidMount() {
    this.getElementsFromPath("/universities");
    this.setState({didmount: true});
  }

  handleElementClick = (path) => {
    if(this.state.didmount){
      this.getElementsFromPath(path);
    }
  }

  render() {
    const { match } = this.props;
    const c = this.props.location.pathname.split('/');
    const l = c.length;
    const b = c.slice(1, l);
    let i = b.length-1;
    b[0] = "Uczelnie";
    return (
      <>
        <nav className="colornav">
          <div className="nav-wrapper path-header-wrapper">
            <div className="col s12 subsite-title">
              {b.map((loc) => <NavLink key={loc} to={this.props.location.pathname.split("/").slice(0,this.props.location.pathname.split("/").length-i--).join("/")} className="breadcrumb">{loc}</NavLink>)}
            </div>
          </div>
        </nav>

        <div className="home-content">
          <ul className="collection">
            <Route exact path={match.path} render={(props) => <UniversityTreeList {...props} elements={this.state.elements} listType={ListTypes.simple} onElementClick={this.handleElementClick} />} />
          </ul>
        </div>
      </>
    );
  }
}

export default MainContainer2