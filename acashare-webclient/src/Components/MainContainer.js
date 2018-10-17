import React from 'react';
import { Route, NavLink } from "react-router-dom";
import Departments from './Departments';

const universities = [
  {name: "Polsko-Japońska Akademia Technik Komputerowych", abbr: "PJATK"},
  {name: "Politechnika Warszawska", abbr: "PW"},
  {name: "Uniwersytet Warszawski", abbr: "UW"},
  {name: "Szkoła Główna Gospodarstwa Wiejskiego", abbr: "SGGW"},
];

class MainContainer extends React.Component {
  constructor(props){
    super(props);
  }

  universitiesLinks = universities.map((u) => 
    <NavLink key={u.abbr} to={`${this.props.match.url}/${u.abbr}`} className="collection-item path-list-item">
      <div>{u.name}
        <li className="secondary-content">
          <i className="material-icons">send</i>
        </li>
      </div>
    </NavLink>);

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
                  {b.map((loc) => <NavLink to={this.props.location.pathname.split("/").slice(0,this.props.location.pathname.split("/").length-i--).join("/")} className="breadcrumb">{loc}</NavLink>)}
                </div>
            </div>
        </nav>

        <div className="home-content">
            <ul className="collection">
                <Route exact path={match.path} render={() => <>{this.universitiesLinks}</>} />
                <Route path={`${match.path}/:id`} render={(props) => <Departments {...props} />} />
            </ul>
        </div>
      </>
    );
  }
}

export default MainContainer

//<Route exact path={match.path} render={() => <>{<NavLink to="/home" className="breadcrumb">Uczelnie</NavLink>}</>} />
//<Route path={`${match.path}/:id`} render={(props) => {return <>{this.state.breadcrumbs.map((b) => <NavLink to={b.link} className="breadcrumb">{b.title}</NavLink>)}</>}} />