import React from 'react';
import {bindActionCreators} from 'redux';
import {
  loadEpisodesListAsync,
  loadFullListEpisodes,
  loadEpisodesMultipleListAsync
} from '../../actions/episodes';
import {connect} from 'react-redux';
import EpisodesCard from './EpisodesCard';
import PaginationEpisodes from './PaginationEpisodes';
import FullListEpisodes from './FullListEpisodes';


class Episodes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayCard: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
    };
  }
  async componentDidMount() {
    await this.props.loadEpisodesListAsync('episodes');
    await this.props.loadFullListEpisodes('episodes',this.props.arrayEpisodes)
    await this.props.loadEpisodesMultipleListAsync('episodes',this.state.arrayCard);
  }

  render() {
    return (
      <div className='container-episodes'>
        <h1>Episodes</h1>
        <FullListEpisodes/>
        <EpisodesCard/>
        <PaginationEpisodes/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    episodesList: state.episodes.episodesList,
    arrayEpisodes:state.episodes.arrayEpisodes,

  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadEpisodesListAsync,
      loadFullListEpisodes,
      loadEpisodesMultipleListAsync,
    },
    dispatch
  );


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Episodes);
