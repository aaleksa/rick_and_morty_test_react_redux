import React from 'react';
import {connect} from 'react-redux';
import './index.css';

const CharacterCard = (props) => {

  const listItems = (
    <ul className={'container-card'}>
    {props.characterList && props.characterList.map((characterList) => (
      <li key={characterList.id} className={'item-card'}>
          <h2>{characterList.name}</h2>
          <img className={'item-card-img'} src={characterList.image}/>
          <span>{characterList.species}</span>
      </li>
    ))}
  </ul>
  )
  return (
    <div className={'container-main'}>
      {listItems}
    </div>
  )
};
function mapStateToProps(state) {
  // console.log('CharacterCard', state)
  return {
    characterList: state.counter.characterList,
  };
}
export default connect(
  mapStateToProps,
)(CharacterCard);





