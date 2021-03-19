import React from 'react';
import {connect} from 'react-redux';
import './index.css';

class EpisodesCard extends React.Component {
  render() {
    const listItem = (
      <table className={'container-table'}>
        <thead>
        <tr>
          <th  className={'item-card'}>Название эпизода</th>
          <th  className={'item-card'}>Дата выхода</th>
          <th  className={'item-card'}>Герои</th>
          <th  className={'item-card'}>Ссылка</th>
        </tr>
        </thead>
        {/*<tbody className={'list-item-episodes'}>*/}
        {/*{this.props.episodesList && this.props.episodesList.map((episodesList) => (*/}
        {/*  <tr key={episodesList.id} className={'item-card'} id={episodesList.id}>*/}
        {/*    <th scope="col">{episodesList.name}</th>*/}
        {/*    <th scope="col">{episodesList.air_date}</th>*/}
        {/*    <th scope="col"></th>*/}
        {/*    <th scope="col">{episodesList.url}</th>*/}
        {/*  </tr>*/}
        {/*))}*/}

        {/*</tbody>*/}
      </table>
    )
    return (
      <div className={'container-main'}>
        {listItem}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    episodesList: state.episodes.episodesList,
  };
}

export default connect(
  mapStateToProps,
)(EpisodesCard);