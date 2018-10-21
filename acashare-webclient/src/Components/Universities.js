import React from 'react'
import MainList from "./MainList";
import IdConstant from '../Common/IdConstant';
import ListTypes from '../Common/ListTypes';

class Universities extends React.Component {
  state = {
    elements: []
  }

  componentDidMount() {
    fetch(`https://localhost:44349/api/v1/universities`)
      .then(res => res.json())
      .then(json => this.setState({elements: json}));
  }

  handleElementOnClick = (title, id) => {
    var root = {title: "Uczelnie", id: "x", to: `/universities`};
    var univ = {title: title, id: id, to: `/universities/${id}/departments`};
    this.props.handleElementOnClick([root, univ]);
  }

  render() {
    return (
      <MainList 
        listType={ListTypes.SIMPLE} 
        elements={this.state.elements} 
        nameOfPropertyToDisplay="name" 
        handleElementOnClick={this.handleElementOnClick} 
        to={`universities/${IdConstant}/departments`} />
    )
  }
}

export default Universities;
