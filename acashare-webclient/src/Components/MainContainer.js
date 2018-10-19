import React from 'react';
import { Route, NavLink } from "react-router-dom";
import Universities from './Universities';
import Departments from './Departments';
import Lessons from './Lessons';

const defaultBreadcrumb = { title: "Uczelnie", path: "/universities" };

class MainContainer extends React.Component {
  state = {
    breadcrumbs: [
      defaultBreadcrumb
    ]
  }

  componentWillReceiveProps(nextProps){
    if(nextProps){
      var newBreadcrumbs = nextProps.location.state ? nextProps.location.state.breadcrumbs : [defaultBreadcrumb];

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
              component={(props) => <Universities {...props} />} 
            />
            <Route 
              exact 
              path="/universities/:universityId/departments"
              component={(props) => <Departments {...props} /> }
            />
            <Route 
              exact 
              path="/universities/:universityId/departments/:departmentId/lessons"
              component={(props) => <Lessons {...props} />} 
            />
          </ul>
        </div>
      </>
    );
  }
}

export default MainContainer