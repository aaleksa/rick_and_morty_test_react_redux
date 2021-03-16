import React from 'react';
import './index.css';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {loadCharacterListAsyncSelectedPage} from '../../modules/counter';


const Pagination = (props) => {

  const listItems = (
    <div className={'container-pagination'}>
      {props.arrayPages && props.arrayPages.map((arrayPages) => (
        <div key={arrayPages.id} className={'item-pagination'}>
          <button className={'item-pagination-button'}
                  onClick={props.loadCharacterListAsyncSelectedPage}>
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
  };
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadCharacterListAsyncSelectedPage,
    },
    dispatch
  );

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Pagination);





