import React from 'react';
import { Route, NavLink } from "react-router-dom";
import Universities from './Universities';
import Departments from './Departments';
import Lessons from './Lessons';

const defaultBreadcrumb = { title: "Uczelnie", path: "/universities" };

class MainContainer extends React.Component {
  state = {
    elements: [],
    breadcrumbs: [
      defaultBreadcrumb
    ]
  }

  componentDidMount() {
    fetch(`https://localhost:44349/api/v1/universities`)
      .then(res => res.json())
      .then(json => this.setState({elements: json}));
  }

  componentWillReceiveProps(nextProps){
    if(nextProps){
      var newBreadcrumbs = nextProps.location.breadcrumbs ? nextProps.location.breadcrumbs : [defaultBreadcrumb];

      this.setState({
        breadcrumbs: newBreadcrumbs
      });
    }
  }

  render() {
    return (
      <>
        <nav className="colornav">
          <div className="nav-wrapper path-header-wrapper">
            <div className="col s12 subsite-title">
              {this.state.breadcrumbs.map((b, key) => (
                <NavLink key={key} to={b.path} className="breadcrumb">{b.title}</NavLink>
              ))}
            </div>
          </div>
        </nav>

        <div className="home-content">
          <ul className="collection">
            <Route 
              exact 
              path="/universities" 
              render={() => {return <Universities elements={this.state.elements} />}} 
            />
            <Route 
              exact 
              path="/universities/:id"
              render={() => { return <Departments {...this.props} />}} 
            />
            <Route 
              exact 
              path="/universities/:id/Lessons"
              render={() => { return <Lessons {...this.props} />}} 
            />
          </ul>
        </div>
      </>
    );
  }
}

export default MainContainer