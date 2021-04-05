import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  loadLocationsListAsync,
  loadLocationsMultipleListAsync
} from '../../actions/locations';
import LocationsCard from '../locations/LocationsCard';

class Locations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayCard: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
    };
  }
  async componentDidMount() {
    await this.props.loadLocationsListAsync('locations');
    // await this.props.loadFullListLocations('episodes',this.props.arrayEpisodes)
    await this.props.loadLocationsMultipleListAsync('locations',this.state.arrayCard);
  }

  render() {
    return (
      <div className='container-locations'>
        <h1>Locations</h1>
        {/*<FilterEpisodes/>*/}
        <LocationsCard/>
        {/*<PaginationEpisodes/>*/}
      </div>
    )


  }
}


 function mapStateToProps (state){
  return {
    locationsList: state.locations.locationsList,
    characterList: state.character.characterList,

  }
 }
 const mapDispatchToProps  = dispatch =>
   bindActionCreators (
     {
       loadLocationsListAsync,
       loadLocationsMultipleListAsync
   },
   dispatch
 )



export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Locations);