import React from 'react';
import {connect} from 'react-redux';
import './location.css';

function isCharacterForEachLocation(resident) {
  let url = resident;
  let str = url.substring(url.lastIndexOf("/") + 1);
  return str;
}

class LocationsCard extends React.Component {
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
              <ul className={'container-img-characters'}>
                {locationsItem.residents && locationsItem.residents.map( (resident, index) => (
                  <li key={index}
                      className={'item-characters'}>
                    <img className={'img-character'}
                         alt={'Нет картинки'} src={this.state.apiEndpointsAvatar + '/' + isCharacterForEachLocation(resident) + '.jpeg'}/>
                  </li>
                ))}
              </ul>
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
      <div className={'container-main'}>
        {listItem}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    locationsList: state.locations.locationsList,
    arrayCharacterForEachLocation: state.locations.arrayCharacterForEachLocation

  };
}

export default connect(
  mapStateToProps,
)(LocationsCard);