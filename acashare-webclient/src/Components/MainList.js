import React from 'react'
import MainListItem from './MainListItem';
import ListTypes from '../Common/ListTypes';

const findIdValue = (element) => {
  return element[Object.keys(element).find(k => k.includes("Id"))];
}

const MainList = ({listType, elements, nameOfPropertyToDisplay, handleElementOnClick, to}) => {
  switch(listType){
    case ListTypes.SIMPLE:
      return (
        <ul className="collection">
          {elements.map((e, key) => <MainListItem key={key} title={e[nameOfPropertyToDisplay]} id={findIdValue(e)} handleElementOnClick={handleElementOnClick} to={to} />)}
        </ul>
      );
    case ListTypes.WITH_SUBTITLES:
    break;
    default:
      return <div>Błędny typ listy</div>
  }
}

export default MainList;