import React from 'react'
import { NavLink } from "react-router-dom";

const Universities = ({elements}) => 
  <>
    {elements.map((u) => 
      <NavLink 
        key={u.name} 
        to={{
          pathname: `/universities/${u.name}`, 
          univId: u.universityId,
          univName: u.name,
          breadcrumbs: [
            {title: "Uczelnie", path: `/universities`}, 
            {title: u.name, path: `/universities/${u.universityId}`}
          ]
        }} 
        className="collection-item path-list-item">

        <div>{u.name}
          <li className="secondary-content">
            <i className="material-icons">send</i>
          </li>
        </div>
      </NavLink>
    )}
  </>

export default Universities
