import React from 'react';
import {connect} from 'react-redux';

class ListMyWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // list: this.props.nameList
    }
  }
  render() {
    return (
      <div>
        <h2>Мой список эпизодов</h2>
        <ul className={'container-list-selected-episodes'}>
          {this.props.listEpisodesMyWatch && this.props.listEpisodesMyWatch.map((name, index) => (
            <li key={index}
                 className={'item-episode'}>
              <input type={'checkbox'}/>
              {/*<div>{this.props.nameList}</div>*/}
              <div>{name}</div>

              <span>X</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }


}

function mapStateToProps(state) {
  return {
    listEpisodesMyWatch: state.myWatchList.listEpisodesMyWatch,
  }
}

export default connect(
  mapStateToProps
)(ListMyWatch);
