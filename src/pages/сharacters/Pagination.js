import React from 'react';
import './index.css';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {loadCharacterMultipleListAsync} from '../../modules/counter';


const Pagination = (props) => {
  function selectedPage(event) {
    // let id = event.target.parentElement.id;
    // if(id = 2) {
    //
    // }
    //fffffffff////
    let id = event.target.parentElement.id;
    console.log('event',event,'id',id)
    let arrayCard = [];
    let start = (id * 10 + 1);
    for (let i = start; i < 10 + start; i++) {
      console.log('i',i)
        arrayCard.push(i);
        console.log(arrayCard)
    }
      console.log('arrayCard',arrayCard,start)
    props.loadCharacterMultipleListAsync(arrayCard);
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

  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadCharacterMultipleListAsync,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);





