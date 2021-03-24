import React from 'react';
import {connect} from 'react-redux';
import './episodes.css';

class EpisodesCard extends React.Component {
  render() {
    const listItem = (
      <table className={'container-table'}>
        <thead>
        <tr>
          <th className={'item-card-episodes '}>Название эпизода</th>
          <th className={'item-card-episodes '}>Дата выхода</th>
          <th className={'item-card-episodes '}>Герои</th>
          <th className={'item-card-episodes '}>Ссылка</th>
        </tr>
        </thead>
        <tbody className={'list-item-episodes'}>
        {this.props.episodesList && this.props.episodesList.map((episodesList) => (
          <tr key={episodesList.id} id={episodesList.id}>
            <th className={'item-card-episodes '}>{episodesList.name}</th>
            <th className={'item-card-episodes '}>{episodesList.air_date}</th>
            <th className={'item-card-episodes '}>
              <ul>
                {episodesList.characters && episodesList.characters.map((characters, index) => (
                  <li key={index}
                    className={'list-characters'}>
                    <a href={characters}
                     className={'link-character'}>{characters}</a>
                  </li>
                ))}

              </ul>
            </th>
            <th className={'item-card-episodes '}>
              <a href={episodesList.url}>{episodesList.url}</a></th>
          </tr>
        ))}

        </tbody>
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