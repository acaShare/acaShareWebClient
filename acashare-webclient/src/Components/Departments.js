import React from 'react'
import { NavLink } from "react-router-dom";

class Departments extends React.Component {
  render() {
    return (
      <>
        {this.props.elements.length > 0 ? (this.props.elements.find(e => e.name === this.props.match.params.univName).departments.map((d, key) => 
          <NavLink 
            key={key} 
            to={`/universities/${this.props.match.params.univName}/departments/${d.name}/lessons`} 
            className="collection-item path-list-item">

            <div>{d.name}
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

export default Departments