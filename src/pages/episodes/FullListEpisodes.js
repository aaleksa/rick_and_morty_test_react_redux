import React from 'react';
import './episodes.css';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {loadEpisodesListAsyncFilter} from '../../actions/episodes';
import {loadEpisodesMultipleListAsync} from '../../actions/episodes';


class FullListEpisodes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      filteredList: [],
    };
    this.visibleListEpisodes = this.visibleListEpisodes.bind(this);
    this.changeEpisodes = this.changeEpisodes.bind(this);
    this.selectEpisodes = this.selectEpisodes.bind(this);

  }

  visibleListEpisodes() {
    this.setState({filteredList: [...this.props.episodesFullList]})
    let element = document.getElementsByClassName('container-episodes-list');
    if(element[0].classList[1] === 'visible-list'){
      element[0].classList.remove('visible-list')
    } else {
      element[0].classList.add('visible-list')
    }
  };
  async changeEpisodes(event) {
    this.setState({name: event.target.value});
    const searchString = event.target.value;
    await this.props.updateData(this.state.name);
    this.setState({filteredList: this.props.episodesFullList.filter((episode) => {
      return episode.name.includes(searchString);
    })});
  }
  async selectEpisodes(event){
    this.setState({name: event.target.innerHTML});
    let filtersString = 'name=' + event.target.innerHTML;
    await this.props.loadEpisodesListAsyncFilter('episodes',filtersString);
    await this.props.updateData(this.state.name);

  }

  render() {
    return (
      <form className={'filter-episodes-form'}>
        <div className={'filter-episodes-select'} >
          <input className={'input-episodes-list'}
                 placeholder={'Выберите эпизод'}
                 value={this.state.name}
                 onChange={this.changeEpisodes}
                 onClick={this.visibleListEpisodes}
                 >
          </input>
          <ul className={'container-episodes-list'}>
            {this.state.filteredList && this.state.filteredList.map((episodesList) => (
              <li className={'filter-episodes-option'}
                  key={episodesList.id + '0'}
                  id={episodesList.id}
                  onClick={this.selectEpisodes}
              >
                {episodesList.name}
              </li>
            ))}
          </ul>
        </div>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    episodesList: state.episodes.episodesList,
    episodesFullList: state.episodes.episodesFullList,
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadEpisodesListAsyncFilter,
      loadEpisodesMultipleListAsync,
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FullListEpisodes);