import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import './myWatch.css';

import {
  loadEpisodesListAsync,
  loadFullListEpisodes,
} from '../../actions/episodes';
import FullListEpisodes from '../episodes/FullListEpisodes.js';
import ListMyWatch from './ListMyWatch.js'

class MyWatchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
    this.updateData = this.updateData.bind(this)

  }
  updateData = (value) => {
    this.setState({ name: value })
  }
  async componentDidMount() {
    await this.props.loadEpisodesListAsync('episodes');
    await this.props.loadFullListEpisodes('episodes',this.props.arrayEpisodes)
  }

   render() {
    return (
      <div className={'container-main-watch'}>
        <h1>MyWatchList</h1>
        <FullListEpisodes updateData={this.updateData}/>
        <ListMyWatch/>
      </div>
    )
   }

};

function mapStateToProps(state) {
  return {
    arrayEpisodes: state.episodes.arrayEpisodes,
    episodesFullList: state.episodes.episodesFullList
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadEpisodesListAsync,
      loadFullListEpisodes,
    },
    dispatch
  );


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyWatchList);