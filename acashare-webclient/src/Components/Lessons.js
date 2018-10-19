import React from 'react'
import { NavLink } from "react-router-dom";

class Lessons extends React.Component {
  state = {
    elements: []
  }
  
  componentDidMount() {
    fetch(`https://localhost:44349/api/v1/lessonsfromdepartment/${this.props.match.params.departmentId}`)
      .then(res => res.json())
      .then(json => this.setState({elements: json}));
  }

  render() {
    console.log("Lessons: ");
    console.log(this.props);
    
    return (
      <>
        {this.state.elements.map((l, key) => 
          <NavLink 
            key={key} 
            to={{
              pathname: `/universities/${this.props.match.params.universityId}/departments/${this.props.match.params.departmentId}/lessons/${l.lessonId}`, 
              state: {
                univName: this.props.location.state.univName,
                deptName: this.props.location.state.deptName,
                lessonId: l.lessonId,
                lessonName: l.name,
                breadcrumbs: [
                  {title: "Uczelnie", path: `/universities`}, 
                  {title: this.props.location.state.univName, path: `/universities/${this.props.match.params.universityId}/departments`}, 
                  {title: this.props.location.state.deptName, path: `/universities/${this.props.match.params.universityId}/departments/${this.props.match.params.departmentId}/lessons`},
                  {title: l.name, path: `/universities/${this.props.match.params.universityId}/departments/${this.props.match.params.departmentId}/lessons/${l.lessonId}`}
                ]
              }
            }} 
            className="collection-item path-list-item">

            <div>{l.sectionOfSubject.subject.name}
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