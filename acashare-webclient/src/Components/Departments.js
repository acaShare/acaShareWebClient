import React from 'react'
import { NavLink } from "react-router-dom";

class Departments extends React.Component {
  state = {
    elements: []
  }
  
  componentDidMount() {
    fetch(`https://localhost:44349/api/v1/departmentsofuniversity/${this.props.location.univId}`)
      .then(res => res.json())
      .then(json => this.setState({elements: json}));
  }

  render() {
    return (
      <>
        {this.state.elements.map((d) => 
          <NavLink 
            key={d.name} 
            to={{
              pathname: `/universities/${d.name}/lessons`, 
              deptId: d.departmentId,
              deptName: d.name,
              breadcrumbs: [
                {title: "Uczelnie", path: `/universities`}, 
                {title: this.props.location.univName, path: `/universities/${this.props.location.univId}`}, 
                {title: d.name, path: `/universities/${this.props.location.univId}/lessons`}
              ]
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




// import React from 'react'
// import { NavLink } from "react-router-dom";

// class Departments extends React.Component {
//   state = {
//     elements: []
//   }
  
//   componentDidMount() {
//     fetch(`https://localhost:44349/api/v1/departmentsofuniversity/${this.props.location.univId}`)
//       .then(res => res.json())
//       .then(json => this.setState({elements: json}));
//   }

//   render() {
//     return (
//       <>
//         {this.state.elements.map((u) => 
//           <NavLink 
//             key={u.name} 
//             to={{
//               pathname: `/universities/${u.name}/lessons`, 
//               deptId: u.departmentId,
//               breadcrumbTitle: u.name, 
//               breadcrumbs: [{title: "Uczelnie", path: `/universities`}, {title: u.name, path: `/universities/${u.universityId}`}],
//               breadcrumbPath: `/universities/${u.universityId}`
//             }} 
//             className="collection-item path-list-item">

//             <div>{u.name}
//               <li className="secondary-content">
//                 <i className="material-icons">send</i>
//               </li>
//             </div>
//           </NavLink>
//         )}
//       </>
//     );
//   }
// }

// export default Departments
