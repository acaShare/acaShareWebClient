import React from 'react'
import MainList from "./MainList";
import IdConstant from '../Common/IdConstant';
import ListTypes from '../Common/ListTypes';

class Lessons extends React.Component {
  state = {
    elements: []
  }

  componentDidMount() {
    fetch(`https://localhost:44349/api/v1/lessonsfromdepartment/${this.props.match.params.deptId}`)
      .then(res => res.json())
      .then(json => this.setState({elements: json}));
  }

  handleElementOnClick = (title, id) => {
    var clickedElement = {title: title, id: id, to: `/universities/${this.params.match.params.univId}/departments/${this.params.match.params.deptId}/lessons/${id}/semesters`};
    this.props.handleElementOnClick([clickedElement]);
  }

  render() {
    return (
      <MainList 
        listType={ListTypes.SIMPLE} 
        elements={this.state.elements} 
        nameOfPropertyToDisplay="lessonId" 
        handleElementOnClick={this.handleElementOnClick} 
        to={`lessons/${IdConstant}/semesters`} />
    );
  }
}

export default Lessons