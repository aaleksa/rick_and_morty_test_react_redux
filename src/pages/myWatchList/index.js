import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import './myWatch.css';

import {
  loadEpisodesListAsync,
  loadFullListEpisodes,
} from '../../actions/episodes';
import {
  listSelectedEpisodesMyWatch,
} from '../../actions/myWatchList';
import FullListEpisodes from '../episodes/FullListEpisodes.js';
import ListMyWatch from './ListMyWatch.js';



class MyWatchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nameList: [],
    }
    this.updateData = this.updateData.bind(this);

  }
  updateData = (value) => {
    // newArray.push(value);
    // console.log('newArray',newArray)
    this.setState({ name: value });
    console.log('value',value)

    this.props.listSelectedEpisodesMyWatch(value);
    // this.setState({nameList: this.state.nameList.push(this.state.name)})
    //  nameList.push(this.state.name);
  }

  async componentDidMount() {
    await this.props.loadEpisodesListAsync('episodes');
    await this.props.loadFullListEpisodes('episodes',this.props.arrayEpisodes)
  }

   render() {
    return (
      <div className={'container-main-watch'}>
        <h1>MyWatchList</h1>
        <FullListEpisodes updateData={this.updateData} />
        {/*<ListMyWatch nameList={this.state.name}/>*/}
        <ListMyWatch/>
        {/*<ListMyWatch nameList={this.state.nameList}/>*/}


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
      listSelectedEpisodesMyWatch
    },
    dispatch
  );


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyWatchList);