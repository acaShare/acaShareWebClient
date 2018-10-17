import React from 'react'
import { Route, NavLink } from "react-router-dom";
import Lecturers from './Lecturers';

const departments = [
  {name: "Informatyka", abbr: "Informatyka"},
  {name: "Sztuka Nowych Mediów", abbr: "Sztuka Nowych Mediów"},
  {name: "Kultura Japonii", abbr: "Kultura Japonii"},
  {name: "Architektura Wnętrz", abbr: "Architektura Wnętrz"},
];

const Departments = ( {match} ) => {
  const departmentsLinks = departments.map((u) => 
  <NavLink key={u.abbr} to={`${match.url}/${u.abbr}`} className="collection-item path-list-item">
    <div>{u.name}
      <li className="secondary-content">
        <i className="material-icons">send</i>
      </li>
    </div>
  </NavLink>);

  return (<>
      <Route exact path={match.path} render={() => <>{departmentsLinks}</>} />
      <Route path={`${match.path}/:id`} render={(props) => <Lecturers {...props} />} />
  </>);
}

export default Departments



// import React from 'react'
// import { NavLink } from "react-router-dom";

// const departments = [
//   {name: "Informatyka", abbr: "Informatyka"},
//   {name: "Sztuka Nowych Mediów", abbr: "Sztuka Nowych Mediów"},
//   {name: "Kultura Japonii", abbr: "Kultura Japonii"},
//   {name: "Architektura Wnętrz", abbr: "Architektura Wnętrz"},
// ];

// const departmentsLinks = departments.map((u) => 
//   <NavLink key={u.abbr} to={u.abbr} className="collection-item path-list-item">
//     <div>{u.name}
//       <li className="secondary-content">
//         <i className="material-icons">send</i>
//       </li>
//     </div>
//   </NavLink>);

// class Departments extends React.Component {
//   constructor(props) {
//     super(props);
    
//     this.props.handleAddBreadcrumb(title: this.props.match.params.id, link: this.props.match.params.id);
//   }
  
//   render(){
//     return(<>{departmentsLinks}</>);
//   }
// }

// // const Departments = ( {match, handleAddBreadcrumb} ) => (
// //   handleAddBreadcrumb(match.params.id, match.params.id),
// //   <>{departmentsLinks}</>
// // )

// export default Departments

