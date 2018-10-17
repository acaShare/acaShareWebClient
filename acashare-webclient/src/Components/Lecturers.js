import React from 'react'
import { NavLink } from "react-router-dom";

const fieldsOfStudies = [
  {name: "aaaa", abbr: "xxx"},
  {name: "bbb", abbr: "zzz"},
  {name: "vvv", abbr: "sss"},
  {name: "ddd", abbr: "ddd"},
];

const fieldsOfStudiesLinks = fieldsOfStudies.map((u) => 
  <NavLink key={u.abbr} to={u.abbr} className="collection-item path-list-item">
    <div>{u.name}
      <li className="secondary-content">
        <i className="material-icons">send</i>
      </li>
    </div>
  </NavLink>);

const Lecturers = () => <>{fieldsOfStudiesLinks}</>

export default Lecturers
