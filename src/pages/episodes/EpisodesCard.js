import React from 'react';
import {connect} from 'react-redux';
import './episodes.css';

function isCharacterForEachEpisode(resident) {
  let url = resident;
  let str = url.substring(url.lastIndexOf("/") + 1);
  return str;
}
class EpisodesCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiEndpointsAvatar: 'https://rickandmortyapi.com/api/character/avatar/',
    };
  }
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
        {this.props.episodesList && this.props.episodesList.map((episodesItem) => (
          <tr key={episodesItem.id} id={episodesItem.id}>
            <th className={'item-card-episodes '}>{episodesItem.name}</th>
            <th className={'item-card-episodes '}>{episodesItem.air_date}</th>
            <th className={'item-card-episodes '}>
              <ul>
                {episodesItem.characters && episodesItem.characters.map((character, index) => (
                  <li key={index}
                    className={'list-characters'}>
                    <img className={'img-character'}
                         alt={'Нет картинки'}
                         src={this.state.apiEndpointsAvatar + '/' + isCharacterForEachEpisode(character) + '.jpeg'}/>
                  </li>
                ))}

              </ul>
            </th>
            <th className={'item-card-episodes '}>
              <a href={episodesItem.url}>{episodesItem.url}</a></th>
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