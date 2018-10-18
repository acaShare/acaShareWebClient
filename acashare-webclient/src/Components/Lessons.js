import React from 'react'
import { NavLink } from "react-router-dom";

class Lessons extends React.Component {
  state = {
    elements: []
  }
  
  componentDidMount() {
    fetch(`https://localhost:44349/api/v1/lessonsfromdepartment/${this.props.location.deptId}`)
      .then(res => res.json())
      .then(json => this.setState({elements: json}));
  }

  render() {
    return (
      <>
        {this.state.elements.map((l, key) => 
          <NavLink 
            key={key} 
            to={{
              pathname: `/universities/${l.name}/Lessons/${l.name}`, 
              deptId: l.departmentId,
              breadcrumbs: [
                {title: "Uczelnie", path: `/universities`}, 
                {title: this.props.location.univName, path: `/universities/${this.props.location.univId}`}, 
                {title: this.props.location.deptName, path: `/universities/${this.props.location.deptName}/lessons`},
                {title: l.name, path: `/universities/${this.props.location.deptId}/lessons/${l.name}`}
              ]
            }} 
            className="collection-item path-list-item">

            <div>{l.name}
              <li className="secondary-content">
                <i className="material-icons">send</i>
              </li>
            </div>
          </NavLink>
        )}
      </>
    );
  }
}

export default Lessons