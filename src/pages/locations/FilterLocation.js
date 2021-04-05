import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import './location.css';
import {loadLocationsListAsyncFilter} from '../../actions/locations';
// import locations from '../../reducers/locations';


class FilterLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {
      // name: '',
      // type: '',
      typeLocation: ['Planet', 'Cluster','Space station','Microverse','TV','Resort','Fantasy town','Dream','Dimension','unknown','Menagerie']
    };
    this.visibleListLocation = this.visibleListLocation.bind(this);
    this.selectLocations = this.selectLocations.bind(this);
  };

  visibleListLocation (event){
    if(event.target.nextSibling.classList[1] === 'visible-list'){
      event.target.nextSibling.classList.remove('visible-list')
    } else {
      event.target.nextSibling.classList.add('visible-list')
    }
  }
  selectLocations(event){
    let filterField = event.target.classList[1];
    let filtersString = filterField +'=' + event.target.textContent;
    // let filtersString = 'name=Planet'
    this.props.loadLocationsListAsyncFilter('locations',filtersString);
  }

  render() {
    return (
      <div className={'filter-container'}>
        <form className={'filter-location-form'}>
          <div className={'filter-location-select'}>
            <input className={'input-location-list'}
                   type="text"
                   placeholder={'Тип локации'}
                   onClick={this.visibleListLocation}
            />
            <ul className={'container-list'}>
              {this.state.typeLocation && this.state.typeLocation.map((itemType,index) =>(
                <li key={index}
                  onClick={this.selectLocations}
                    className={'filter-location-option type'}>
                  {itemType}
                </li>
              ))}
            </ul>

          </div>
        </form>
        <form className={'filter-location-form'}>
          <div className={'filter-location-select'}>
            <input className={'input-location-list'}
                   type="text"
                   placeholder={'Названия локации'}
                   onClick={this.visibleListLocation}
            />
            <ul className={'container-list'}>
              {this.props.locationsFullList && this.props.locationsFullList.map((itemType,index) =>(
                <li key={index}
                  onClick={this.selectLocations}
                    className={'filter-location-option name'}>
                  {itemType.name}
                </li>
              ))}
            </ul>

          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    locationsFullList: state.locations.locationsFullList,
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadLocationsListAsyncFilter,
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLocation);