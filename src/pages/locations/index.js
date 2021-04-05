import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  loadLocationsListAsync,
  loadLocationsMultipleListAsync,
  loadFullListLocation
} from '../../actions/locations';
import LocationsCard from '../locations/LocationsCard';
import FilterLocation from '../locations/FilterLocation';


class Locations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayCard: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
    };
  }
  async componentDidMount() {
    await this.props.loadLocationsListAsync('locations');
    await this.props.loadFullListLocation('locations',this.props.arrayLocation)
    await this.props.loadLocationsMultipleListAsync('locations',this.state.arrayCard);
  }

  render() {
    return (
      <div className='container-locations'>
        <h1>Locations</h1>
        <FilterLocation/>
        <LocationsCard/>
        {/*<PaginationEpisodes/>*/}
      </div>
    )


  }
}


 function mapStateToProps (state){
  return {
    locationsList: state.locations.locationsList,
    arrayLocation: state.locations.arrayLocation,

  }
 }
 const mapDispatchToProps  = dispatch =>
   bindActionCreators (
     {
       loadLocationsListAsync,
       loadLocationsMultipleListAsync,
       loadFullListLocation
   },
   dispatch
 )



export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Locations);