import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Universities from './Universities';
import Departments from './Departments';
import Lessons from './Lessons';

const defaultBreadcrumb = { title: "Uczelnie", id: "x", to: "/universities" };

class MainContainer extends React.Component {
  state = {
    elements: [],
    breadcrumbs: [
      defaultBreadcrumb
    ]
  }

  onBreadcrumbClick = (breadcrumb) => {
    const currentBreadcrumbs = this.state.breadcrumbs;
    var brs = [];
    for(var i in currentBreadcrumbs) {
      var br = currentBreadcrumbs[i];
      brs = [...brs, br];
      if(br.title === breadcrumb.title) {
        break;
      }
    }
    this.setState({breadcrumbs: brs});
  }

  onElementClicked = (breadcrumbs) => {
    this.setState({breadcrumbs: breadcrumbs});
  }

  render() {
    return (
      <>
        <nav className="colornav">
          <div className="nav-wrapper path-header-wrapper">
            <div className="col s12 subsite-title">
              {this.state.breadcrumbs.map((b, key) => (
                <NavLink key={key} to={b.to} className="breadcrumb" onClick={() => this.onBreadcrumbClick(b)}>{b.title}</NavLink>
              ))}
            </div>
          </div>
        </nav>

        <div className="home-content">
          <Route exact path={"/universities"} render={(props) => <Universities {...props} handleElementOnClick={this.onElementClicked} />} />
          <Route exact path={"/universities/:univId/departments"} render={(props) => <Departments {...props} br={this.state.breadcrumbs} handleElementOnClick={this.onElementClicked} />} />
          <Route exact path={"/universities/:univId/departments/:deptId/lessons"} render={(props) => <Lessons {...props} br={this.state.breadcrumbs} handleElementOnClick={this.onElementClicked} />} />
        </div>
      </>
    );
  }
}

export default MainContainer