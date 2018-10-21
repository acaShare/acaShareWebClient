import React from 'react'
import MainList from "./MainList";
import IdConstant from '../Common/IdConstant';
import ListTypes from '../Common/ListTypes';

class Departments extends React.Component {
  state = {
    elements: [],
    univ: ''
  }

  componentDidMount() {
    fetch(`https://localhost:44349/api/v1/departmentsofuniversity/${this.props.match.params.univId}`)
      .then(res => res.json())
      .then(json => this.setState({elements: json}));

    if(this.props.br.length === 1) {
      fetch(`https://localhost:44349/api/v1/universities/${this.props.match.params.univId}`)
        .then(res => res.json())
        .then(univ => {
          console.log(univ);
          
          var root = {title: "Uczelnie", id: "x", to: `/universities`};
          var u = {title: univ.name, id: univ.universityId, to: `/universities/${univ.universityId}/departments`};
          this.props.handleElementOnClick([root, u]);
        });
    }
  }

  handleElementOnClick = (title, id) => {
    var root = {title: "Uczelnie", id: "x", to: `/universities`};
    var univ = {title: this.props.br[1].title, id: this.props.br[1].id, to: `/universities/${this.props.br[1].id}/departments`};
    var dept = {title: title, id: id, to: `/universities/${this.props.match.params.univId}/departments/${id}/lessons`};
    this.props.handleElementOnClick([root, univ, dept]);
  }

  render() {
    return (
      <MainList 
        listType={ListTypes.SIMPLE}  
        elements={this.state.elements} 
        nameOfPropertyToDisplay="name" 
        handleElementOnClick={this.handleElementOnClick} 
        to={`departments/${IdConstant}/lessons`} />
    );
  }
}

export default Departments