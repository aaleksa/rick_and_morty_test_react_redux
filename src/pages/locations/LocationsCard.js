import React from 'react';
import {connect} from 'react-redux';
import './location.css';

function isCharacterForEachLocation(resident) {
  // let arrayCharacterForEachLocation = [];
  // let arrayCharacterOneLocation = [];
  // let payloadLength = this.props.locationsList.length;
  // for (let i = 0; i < payloadLength; i++) {
  //   let residentsLength = this.props.locationsList[i].residents.length;
  //   arrayCharacterOneLocation = [];
  //   for (let y = 0; y < residentsLength; y++) {
  let url = resident;
  console.log('url', url)
  let str = url.substring(url.lastIndexOf("/") + 1);
  return str;
  //     arrayCharacterOneLocation.push(str);
  //   }
  //   arrayCharacterForEachLocation.push(arrayCharacterOneLocation);
  //   console.log('arrayCharacterForEachLocation', arrayCharacterForEachLocation)
  // }
}

class LocationsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiEndpoints: 'https://rickandmortyapi.com/api/character/avatar/',
    };
    // this.isCharacterForEachLocation = this.isCharacterForEachLocation.bind();

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
              <ul>
                {locationsItem.residents && locationsItem.residents.map( (resident, index) => (
                  <li key={index}
                      className={'list-characters'}>
                    {/*<div>{character}</div>*/}
                    <img src={this.state.apiEndpoints + '/' + isCharacterForEachLocation(resident) + '.jpeg'}/>
                    <a key={index}
                          href={resident} className={'link-character'}>
                    </a>
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