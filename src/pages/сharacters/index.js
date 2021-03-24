import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import CharactersCard from './CharacterCard.js'
import Pagination from './Pagination.js'
import Filter from './Filter';
import './index.css';
import {
  loadCharacterListAsyncFilter,
  loadCharacterListAsync,
  loadCharacterMultipleListAsync,
} from '../../actions/character';


class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayCard: [1,2,3,4,5,6,7,8,9,10],

    };
  }
  async componentDidMount() {
    this.props.loadCharacterListAsync('characters');
    this.props.loadCharacterMultipleListAsync('characters',this.state.arrayCard);
  }

  render() {
    return (
      <div className='container-characters'>
        <h1>Characters</h1>
        <Filter/>
        <CharactersCard/>
        <Pagination />
      </div>
    )
  }

};

function mapStateToProps(state) {
  return {
    isRequestingCharacterList: state.character.isRequestingCharacterList,
    characterList: state.character.characterList,
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadCharacterListAsyncFilter,
      loadCharacterListAsync,
      loadCharacterMultipleListAsync,
    },
    dispatch
  );


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Characters);
