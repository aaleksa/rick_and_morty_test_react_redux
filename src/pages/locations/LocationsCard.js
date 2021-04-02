import React from 'react';
import {connect} from 'react-redux';
import './location.css';

class LocationsCard extends React.Component {
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
        {this.props.locationsList && this.props.locationsList.map((locationsList) => (
          <tr key={locationsList.id} id={locationsList.id}>
            <th className={'item-card-locations '}>{locationsList.name}</th>
            <th className={'item-card-locations '}>{locationsList.type}</th>
            <th className={'item-card-locations '}>
              <ul>
                {locationsList.residents && locationsList.residents.map((residents, index) => (
                  <li key={index}
                      className={'list-characters'}>
                    <a href={residents}
                       className={'link-character'}>{residents}</a>
                  </li>
                ))}

              </ul>
            </th>
            <th className={'item-card-locations '}>{locationsList.dimension}</th>
            <th className={'item-card-locations '}>
              <a href={locationsList.url}>{locationsList.url}</a></th>
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
  };
}

export default connect(
  mapStateToProps,
)(LocationsCard);