import React from 'react';
import './episodes.css';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {loadEpisodesMultipleListAsync} from '../../actions/episodes';


const PaginationEpisodes = (props) => {
  function selectedPage(event) {
    let pageNumber = event.target.parentElement.id - 1;
      let arrayCardIds = [];
      let start = (pageNumber * 25 + 1);
      for (let i = start; i < 25 + start; i++) {
        arrayCardIds.push(i);
      }
      props.loadEpisodesMultipleListAsync('episodes',arrayCardIds);
    // }
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
    arrayPages: state.episodes.arrayPages,
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadEpisodesMultipleListAsync,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationEpisodes);

