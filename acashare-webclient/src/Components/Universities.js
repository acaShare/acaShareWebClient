import React from 'react'
import { NavLink } from "react-router-dom";

class Universities extends React.Component {
  state = {
    elements: []
  }

  componentDidMount() {
    fetch(`https://localhost:44349/api/v1/universities`)
      .then(res => res.json())
      .then(json => this.setState({elements: json}));
  }

  render() {
    console.log("Universities: ");
    console.log(this.props);
    return (
      <>
        {this.state.elements.map((u, key) => 
          <NavLink 
            key={key} 
            to={{
              pathname: `/universities/${u.universityId}/departments`, 
              state: {
                univId: u.universityId,
                univName: u.name,
                breadcrumbs: [
                  {title: "Uczelnie", path: `/universities`}, 
                  {title: u.name, path: `/universities/${u.universityId}/departments`}
                ]
              }
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
    );
  }
}

export default Universities;
