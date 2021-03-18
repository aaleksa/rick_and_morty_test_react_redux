import React from 'react';
import './index.css';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {loadCharacterListAsyncSelectedPage} from '../../modules/counter';
import {loadCharacterListAsyncFilter} from '../../modules/counter';
import {loadCharacterMultipleListAsync} from '../../modules/counter';


const Pagination = (props) => {
  function selectedPage(event) {
    console.log('selectedPage', props.characterList, props.arrayPages, 'filters', props.filters)
    let id = event.target.parentElement.id;
    const strUrl = 'page=' + id + '&' + props.filters;
    if (props.filters) {
      props.loadCharacterListAsyncFilter(strUrl);
    } else {
      let arrayCardIds = [];
      let start = (id * 10 + 1);
      for (let i = start; i < 10 + start; i++) {
        console.log('i', i)
        arrayCardIds.push(i);
        console.log(arrayCardIds)
      }
      console.log('arrayCardIds', arrayCardIds, start)
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
    arrayPages: state.counter.arrayPages,
    characterList: state.counter.characterList,
    filters: state.counter.filterValue,

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





