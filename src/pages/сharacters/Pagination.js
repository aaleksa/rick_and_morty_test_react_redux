import React from 'react';
import './index.css';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {loadCharacterListAsyncSelectedPage} from '../../actions/character';
import {loadCharacterListAsyncFilter} from '../../actions/character';
import {loadCharacterMultipleListAsync} from '../../actions/character';


const Pagination = (props) => {
  function selectedPage(event) {
    let pageNumber = event.target.parentElement.id;
    if (props.filters) {
      props.loadCharacterListAsyncFilter(props.filters, pageNumber);
    } else {
      let arrayCardIds = [];
      let start = (pageNumber * 10 + 1);
      for (let i = start; i < 10 + start; i++) {
        arrayCardIds.push(i);
      }
      props.loadCharacterMultipleListAsync(arrayCardIds);
    }
  }

  const listItems = (
    <div className={'container-pagination'}>
      {props.arrayPages && props.arrayPages.map((arrayPages) => (
        <div key={arrayPages.id + '0'}
             className={'item-pagination'}
             id={arrayPages.id}
        >
          <button className={'item-pagination-button'}
                  onClick={selectedPage}>
            {arrayPages.value}
          </button>
        </div>
      ))}
    </div>
  )

  return (
    <div className={'container-main-pagination'}>
      {listItems}
    </div>
  )
};

function mapStateToProps(state) {
  return {
    arrayPages: state.character.arrayPages,
    characterList: state.character.characterList,
    filters: state.character.filterValue,

  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadCharacterListAsyncSelectedPage,
      loadCharacterListAsyncFilter,
      loadCharacterMultipleListAsync,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);





