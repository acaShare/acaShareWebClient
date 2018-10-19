import React from 'react'
import { NavLink } from "react-router-dom";

class Departments extends React.Component {
  state = {
    elements: []
  }
  
  componentDidMount() {
    fetch(`https://localhost:44349/api/v1/departmentsofuniversity/${this.props.match.params.universityId}`)
      .then(res => res.json())
      .then(json => this.setState({elements: json}));
  }

  render() {
    return (
      <>
        {this.state.elements.map((d, key) => 
          <NavLink 
            key={key} 
            to={{
              pathname: `/universities/${this.props.match.params.universityId}/departments/${d.departmentId}/lessons`, 
              state: {
                univName: this.props.location.state.univName,
                deptId: d.departmentId,
                deptName: d.name,
                breadcrumbs: [
                  {title: "Uczelnie", path: `/universities`}, 
                  {title: this.props.location.state.univName, path: `/universities/${this.props.match.params.universityId}/departments`}, 
                  {title: d.name, path: `/universities/${this.props.match.params.universityId}/departments/${d.departmentId}/lessons`}
                ]
              }
            }} 
            className="collection-item path-list-item">

            <div>{d.name}
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

export default Departments