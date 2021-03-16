import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import CharactersCard from './CharacterCard.js'
import Pagination from './Pagination.js'
import './index.css';
import {
  loadCharacterListAsyncFilter,
  loadCharacterListAsync,
} from '../../modules/counter';

const filtersArray = [];
const numberPage = 1;

class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    this.props.loadCharacterListAsync();
  }

  handleInputChange(event) {

    const checkbox = event.target;
    const elementName = event.target.name;
    const id = event.target.id;
    const checked = event.target.checked;

    let checkboxes = document.getElementsByName(elementName)
    checkboxes.forEach((item) => {
      if (item !== checkbox) item.checked = false
    })
    const filters = {
      [elementName]: id
    };
    const existingElementIndex = filtersArray.findIndex(item => item[elementName] !== undefined);
    if (existingElementIndex !== -1) {
      filtersArray.splice(existingElementIndex, 1);
      if (checked) {
        filtersArray.push(filters);
      }
    } else {
      filtersArray.push(filters);
    }
    console.log('filtersArray',filtersArray)
    this.props.loadCharacterListAsyncFilter(filtersArray);
  }

  render() {

    return (

      <div className='container-characters'>
        <h1>Characters</h1>
        <form className={'container-group'} id="gender_form">
          <div className={'container-checkbox'} onClick={this.handleInputChange}>
            <input type="checkbox" className={'checkbox'} id={'Male'} name={'gender'}/>
            <label htmlFor={'Male'}>Male</label>
          </div>
          <div className={'container-checkbox'} onClick={this.handleInputChange}>
            <input type="checkbox" className={'checkbox'} id={'Female'} name={'gender'}/>
            <label htmlFor={'Female'}>Female</label>
          </div>
        </form>
        <form className={'container-group'} id="status_form">
          <div className={'container-checkbox'} onClick={this.handleInputChange}>
            <input type="checkbox" className={'checkbox'} id={'Alive'} name={'status'}/>
            <label htmlFor={'Alive'}>Alive</label>
          </div>
          <div className={'container-checkbox'} onClick={this.handleInputChange}>
            <input type="checkbox" className={'checkbox'} id={'unknown'} name={'status'}/>
            <label htmlFor={'unknown'}>Unknown</label>
          </div>
          <div className={'container-checkbox'} onClick={this.handleInputChange}>
            <input type="checkbox" className={'checkbox'} id={'Dead'} name={'status'}/>
            <label htmlFor={'Dead'}>Dead</label>
          </div>
        </form>
        <form className={'container-group'} id="species_form">
          <div className={'container-checkbox'} onClick={this.handleInputChange}>
            <input type="checkbox" className={'checkbox'} id={'Human'} name={'species'}/>
            <label htmlFor={'Human'}>Human</label>
          </div>
          <div className={'container-checkbox'} onClick={this.handleInputChange}>
            <input type="checkbox" className={'checkbox'} id={'Alien'} name={'species'}/>
            <label htmlFor={'Alien'}>Alien</label>
          </div>
        </form>
        <CharactersCard/>
        <Pagination />
      </div>
    )
  }

};

function mapStateToProps(state) {
  return {
    isRequestingCharacterList: state.counter.isRequestingCharacterList,
    characterList: state.counter.characterList,
    listInfo: state.counter.listInfo,
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadCharacterListAsyncFilter,
      loadCharacterListAsync,
    },
    dispatch
  );


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Characters);
