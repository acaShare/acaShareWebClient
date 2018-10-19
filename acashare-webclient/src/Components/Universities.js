import React from 'react'
import { NavLink } from "react-router-dom";

class Universities extends React.Component {
  render() {
    return (
      <>
        {this.props.elements ? (this.props.elements.map((u, key) => 
          <NavLink 
            key={key} 
            to={`/universities/${u.name}/departments`}
            className="collection-item path-list-item">

            <div>{u.name}
              <li className="secondary-content">
                <i className="material-icons">send</i>
              </li>
            </div>
          </NavLink>
        ) ) : (<div>Ładowanie</div>) }
      </>
    );
  }
}

export default Universities;
