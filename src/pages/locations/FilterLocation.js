import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import './location.css';
import {loadLocationsListAsyncFilter} from '../../actions/locations';

class FilterLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {
      filteredList: [],
      filteredListType: [],
      filteredListDimension: [],
      name: '',
      type: '',
      dimension: '',
    };
    this.visibleListLocation = this.visibleListLocation.bind(this);
    this.selectLocations = this.selectLocations.bind(this);
    this.changeLocation = this.changeLocation.bind(this);
  };

  visibleListLocation (event){
    this.setState({filteredList: [...this.props.locationsFullList]});
    this.setState({filteredListType: [...this.props.typeLocation]});
    this.setState({filteredListDimension: [...this.props.arrayDimensions]});
    if(event.target.nextSibling.classList[1] === 'visible-list'){
      event.target.nextSibling.classList.remove('visible-list')
    } else {
      event.target.nextSibling.classList.add('visible-list')
    }
  }
  changeLocation(event){
    let filterField = event.target.classList[1];
    if(filterField === 'name'){
      this.setState({name: event.target.value});
      const searchString = event.target.value;
      this.setState({filteredList:this.props.locationsFullList.filter((location) => {
        return location.name.includes(searchString);
      })});
    }
    if(filterField === 'type'){
      this.setState({type: event.target.value});
      const searchString = event.target.value;
      this.setState({filteredListType: this.props.typeLocation.filter((location) => {
        return location.includes(searchString);
      })});
    }
    if(filterField === 'dimension'){
      this.setState({dimension: event.target.value});
      const searchString = event.target.value;
      this.setState({filteredListDimension: this.props.arrayDimensions.filter((location) => {
        return location.includes(searchString);
      })});
    }

  }
  selectLocations(event){
    let filterField = event.target.classList[1];
    this.setState({[filterField]: event.target.textContent});
    let filtersString = filterField +'=' + event.target.textContent;
    this.props.loadLocationsListAsyncFilter('locations',filtersString);
  }

  render() {
    return (
      <div className={'filter-container'}>
        <form className={'filter-location-form'}>
          <div className={'filter-location-select'}>
            <input className={'input-location-list type'}
                   placeholder={'Тип локации'}
                   value={this.state.type}
                   onChange={this.changeLocation}
                   onClick={this.visibleListLocation}
            />
            <ul className={'container-list'}>
              {this.state.filteredListType && this.state.filteredListType.map((itemType,index) =>(
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
            <input className={'input-location-list name'}
                   placeholder={'Названия локации'}
                   value={this.state.name}
                   onClick={this.visibleListLocation}
                   onChange={this.changeLocation}/>
            <ul className={'container-list'}>
              {this.state.filteredList && this.state.filteredList.map((itemType,index) =>(
                <li key={index}
                    onClick={this.selectLocations}
                    className={'filter-location-option name'}>
                  {itemType.name}
                </li>
              ))}
            </ul>

          </div>
        </form>
        <form className={'filter-location-form'}>
          <div className={'filter-location-select'}>
            <input className={'input-location-list dimension'}
                   placeholder={'Измерение локации'}
                   onClick={this.visibleListLocation}
                   value={this.state.dimension}
                   onChange={this.changeLocation}
            />
            <ul className={'container-list'}>
              {this.state.filteredListDimension && this.state.filteredListDimension.map((itemDimension,index) =>(
                <li key={index}
                    onClick={this.selectLocations}
                    className={'filter-location-option dimension'}>
                  {itemDimension}
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
    typeLocation: state.locations.typeLocation,
    locationsFullList: state.locations.locationsFullList,
    arrayDimensions: state.locations.arrayDimensions,
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