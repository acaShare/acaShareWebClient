import React from 'react';
import { NavLink } from "react-router-dom";
import ListTypes from '../Common/ListTypes.js';

let elementsToRender;

class UniversityTreeList extends React.Component {
  onElementClick = (e, url) => {
    e.preventDefault();
    this.props.onElementClick(url);
    e.currentTarget.click();
  }

  render() {
    const {elements, listType, onElementClick, ...rest} = this.props;

    if(listType === ListTypes.simple){
      elementsToRender = elements.map((e) => 
        <NavLink onClick={(event) => this.onElementClick(event, `${this.props.match.url}/${e.name}`)} key={e.name} to={`${rest.match.url}/${e.name}`} className="collection-item path-list-item">
          <div>{e.name}
            <li className="secondary-content">
              <i className="material-icons">send</i>
            </li>
          </div>
        </NavLink>
      );
    }
    else {
      elementsToRender = elements.map((e) => 
        <NavLink key={e.name} to={`${rest.match.url}/${e.name}`} className="collection-item path-list-item">
          <div>
            <span className="path-list-item-title">{e.name}</span>
            <br></br>
            <span className="path-list-item-subtitle">{e.name}</span>
            <a href="#!" className="secondary-content">
              <i className="material-icons">send</i>
            </a>
          </div>
        </NavLink>
      );
    }

    return (
      <>{elementsToRender}</>
    )
  }
}

export default UniversityTreeList



// import React from 'react';
// import { NavLink } from "react-router-dom";
// import ListTypes from '../Common/ListTypes.js';

// const UniversityTreeList = ({elements, listType, onElementClick, ...rest}) => {
//   let elementsToRender;

//   if(listType === ListTypes.simple){
//     elementsToRender = elements.map((e) => 
//       <NavLink key={e.name} to={`${rest.match.url}/${e.name}`} className="collection-item path-list-item">
//         <div>{e.name}
//           <li className="secondary-content">
//             <i className="material-icons">send</i>
//           </li>
//         </div>
//       </NavLink>
//     );
//   }
//   else {
//     elementsToRender = elements.map((e) => 
//       <NavLink key={e.name} to={`${rest.match.url}/${e.name}`} className="collection-item path-list-item">
//         <div>
//           <span className="path-list-item-title">{e.name}</span>
//           <br></br>
//           <span className="path-list-item-subtitle">{e.name}</span>
//           <a href="#!" className="secondary-content">
//             <i className="material-icons">send</i>
//           </a>
//         </div>
//       </NavLink>
//     );
//   }
  
//   return (
//     <>{elementsToRender}</>
//   )
// }

// export default UniversityTreeList