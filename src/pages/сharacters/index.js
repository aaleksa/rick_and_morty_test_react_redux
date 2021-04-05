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
  loadFullListCharacter
} from '../../actions/character';


class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayCard: [1,2,3,4,5,6,7,8,9,10],

    };
  }
  async componentDidMount() {
    await this.props.loadCharacterListAsync('characters');
    await this.props.loadFullListCharacter('characters',this.props.arrayCharacter)
    await this.props.loadCharacterMultipleListAsync('characters',this.state.arrayCard);
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
    arrayCharacter: state.character.arrayCharacter,
    // characterFullList: state.character.characterFullList
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadCharacterListAsyncFilter,
      loadCharacterListAsync,
      loadCharacterMultipleListAsync,
      loadFullListCharacter
    },
    dispatch
  );


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Characters);
