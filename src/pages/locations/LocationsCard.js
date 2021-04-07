import React from 'react';
import {connect} from 'react-redux';
import './location.css';
import PopupFullCard from '../../components/PopupFullCard';
import {bindActionCreators} from 'redux';
import {
  loadSingleCharacter,
} from '../../actions/character';

function isCharacterForEachLocation(resident) {
  let url = resident;
  let str = url.substring(url.lastIndexOf("/") + 1);
  return str;
}

class LocationsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopupFullCard: false,
      showPopupFullCardForLocation: {},
      apiEndpointsAvatar: 'https://rickandmortyapi.com/api/character/avatar/',
    };
    this.showFullCardLocation = this.showFullCardLocation.bind(this);
    this.hideFullCard = this.hideFullCard.bind(this);
  }

  async showFullCardLocation(event) {
    let idElement = event.target.parentElement.id;
    await this.props.loadSingleCharacter('characters',idElement);
    if (this.props.characterSingle === undefined) {
      this.setState({
        showPopupFullCardForLocation: {debug_undefined: 'debug un'},
        showPopupFullCard: true,
      });
    } else {
      this.setState({
        showPopupFullCardForLocation: this.props.characterSingle,
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
          <th className={'item-card-locations '}>Название локации</th>
          <th className={'item-card-locations '}>Тип локации</th>
          <th className={'item-card-locations '}>Герои</th>
          <th className={'item-card-locations '}>Измерение локации</th>
          <th className={'item-card-locations '}>Ссылка</th>
        </tr>
        </thead>
        <tbody className={'list-item-locations'}>
        {this.props.locationsList && this.props.locationsList.map((locationsItem) => (
          <tr key={locationsItem.id} id={locationsItem.id}>
            <th className={'item-card-locations '}>{locationsItem.name}</th>
            <th className={'item-card-locations '}>{locationsItem.type}</th>
            <th className={'item-card-locations '}>
              <div className={'container-img-characters'}>
                {locationsItem.residents && locationsItem.residents.map( (resident, index) => (
                  <div key={index}
                      className={'item-characters'}
                       id={isCharacterForEachLocation(resident)}
                       onClick={this.showFullCardLocation}>
                    <img className={'img-character'}
                         alt={'Нет картинки'}
                         src={this.state.apiEndpointsAvatar + '/' + isCharacterForEachLocation(resident) + '.jpeg'}/>
                  </div>
                ))}
              </div>
            </th>
            <th className={'item-card-locations '}>{locationsItem.dimension}</th>
            <th className={'item-card-locations '}>
              <a href={locationsItem.url}>{locationsItem.url}</a></th>
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
          <PopupFullCard pressedCard={this.state.showPopupFullCardForLocation}/>
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
    locationsList: state.locations.locationsList,
    arrayCharacterForEachLocation: state.locations.arrayCharacterForEachLocation

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
)(LocationsCard);