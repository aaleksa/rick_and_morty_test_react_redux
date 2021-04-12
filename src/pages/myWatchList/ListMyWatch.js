import React from 'react';
import {connect} from 'react-redux';

class ListMyWatch extends React.Component {
  render() {
    return (
      <div>
        <h2>Мой список эпизодов</h2>
        <div className={'container-list-selected-episodes'}>
            <div className={'item-episode'}>
              <input type={'checkbox'}/>
              <a>jjjjj</a>
              <span>X</span>
            </div>
        </div>
      </div>
    )
  }


}

export default connect(
)(ListMyWatch);
