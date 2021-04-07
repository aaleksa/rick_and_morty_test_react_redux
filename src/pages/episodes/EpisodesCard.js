import React from 'react';
import {connect} from 'react-redux';
import './episodes.css';
import PopupFullCard from '../../components/PopupFullCard';
import {
  loadSingleCharacter,
} from '../../actions/character';
import {bindActionCreators} from 'redux';


function isCharacterForEachEpisode(resident) {
  let url = resident;
  let str = url.substring(url.lastIndexOf("/") + 1);
  return str;
}
class EpisodesCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopupFullCard: false,
      showPopupFullCardForEpisode: {},
      apiEndpointsAvatar: 'https://rickandmortyapi.com/api/character/avatar/',
    };
    this.showFullCardEpisode = this.showFullCardEpisode.bind(this);
    this.hideFullCard = this.hideFullCard.bind(this);
  }

  async showFullCardEpisode(event) {
    const idElement = event.target.parentElement.id;
    await this.props.loadSingleCharacter('characters',idElement);

    if (this.props.characterSingle === undefined) {
      this.setState({
        showPopupFullCardForEpisode: {debug_undefined: 'debug un'},
        showPopupFullCard: true,
      });
    } else {
      this.setState({
        showPopupFullCardForEpisode: this.props.characterSingle,
        showPopupFullCard: true,
      });

    }
  }

  hideFullCard() {
    this.setState({showPopupFullCard: false});
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
                      id={isCharacterForEachEpisode(character)}
                      onClick={this.showFullCardEpisode}
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
      <div>
        <div className={'container-popup-character-card'}>
          {this.state.showPopupFullCard &&
          <div>
            <button onClick={this.hideFullCard}>X</button>
          </div>
          }
          {this.state.showPopupFullCard &&
          <PopupFullCard pressedCard={this.state.showPopupFullCardForEpisode}/>
          }
        </div>
        <div className={'container-main'}>
          {listItem}
        </div>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    characterSingle: state.character.characterSingle,
    episodesList: state.episodes.episodesList,
  };
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadSingleCharacter,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EpisodesCard);