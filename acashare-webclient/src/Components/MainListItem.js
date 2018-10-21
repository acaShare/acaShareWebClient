import React from 'react';
import { NavLink } from 'react-router-dom'
import IdConstant from '../Common/IdConstant';

const MainListItem = ({ title, id, handleElementOnClick, to}) => 
  <NavLink to={to.replace(IdConstant, id)} className="collection-item path-list-item" onClick={() => handleElementOnClick(title, id)}>
    <div>{title}
      <li className="secondary-content">
        <i className="material-icons">send</i>
      </li>
    </div>
  </NavLink>

export default MainListItem;