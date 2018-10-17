import React from 'react';
import { Route, NavLink } from "react-router-dom";
import University from './University';

const universities = [
  {name: "Polsko-Japońska Akademia Technik Komputerowych", abbr: "PJATK"},
  {name: "Politechnika Warszawska", abbr: "PW"},
  {name: "Uniwersytet Warszawski", abbr: "UW"},
  {name: "Szkoła Główna Gospodarstwa Wiejskiego", abbr: "SGGW"},
];

class MainContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      breadcrumbs: [
        { title: "Uczelnie", link: "/home" }
      ]
    }
  }

  universitiesLinks = universities.map((u) => 
    <NavLink key={u.abbr} to={`${this.props.match.url}/${u.abbr}`} className="collection-item path-list-item">
      <div>{u.name}
        <li className="secondary-content">
          <i className="material-icons">send</i>
        </li>
      </div>
    </NavLink>);

  handleAddBreadcrumb = (breadcrumbs) => {
    this.setState({
      breadcrumbs: breadcrumbs
    });
  }

  render() {
    const { match } = this.props;

    return (
      <>
        <nav className="colornav">
            <div className="nav-wrapper path-header-wrapper">
                <div className="col s12 subsite-title">
                  {this.state.breadcrumbs.map((b) => 
                    <NavLink to={b.link} className="breadcrumb">{b.title}</NavLink>
                  )}
                </div>
            </div>
        </nav>

        <div className="home-content">
            <ul className="collection">
                <Route exact path={match.path} render={() => <>{this.universitiesLinks}</>} />
                <Route path={`${match.path}/:id`} render={(props) => <University {...props} breadcrumbs={this.state.breadcrumbs} handleAddBreadcrumb={this.handleAddBreadcrumb} />} />
            </ul>
        </div>
      </>
    );
  }
}

export default MainContainer
