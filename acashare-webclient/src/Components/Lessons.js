import React from 'react'
import { NavLink } from "react-router-dom";

class Lessons extends React.Component {
  render() {
    return (
      <>
        {this.props.elements.length > 0 ? (this.props.elements.find(e => e.name === this.props.match.params.univName).departments.find(d => d.name === this.props.match.params.deptName).lessons.map((l, key) =>
          <NavLink 
            key={key} 
            to={`/universities/${this.props.match.params.univName}/departments/${this.props.match.params.deptName}/lessons/${l.sectionOfSubject.subject.name}`} 
            className="collection-item path-list-item">

            <div>{l.sectionOfSubject.subject.name}
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

export default Lessons