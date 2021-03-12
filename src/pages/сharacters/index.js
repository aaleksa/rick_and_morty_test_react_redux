import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CharactersCard from './CharacterCard.js'
import { useDispatch } from 'react-redux'

import './index.css';
import {
  loadCharacterListAsyncFilter,
  loadCharacterListAsync,
} from '../../modules/counter';
const filtersArray = [];


class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // const arrayLen = new Array(props.countPages.info.pages);
  // const arrayPages = function() {
  //   let array = [];
  //   for (let i = 1; i <= arrayLen; i++ ){
  //     array.push(i)
  //   }
  //
  //   return array;
  // }
  // const listPages = (
  //   <ul className={'container-card'}>
  //     {arrayPages.map((arrayPages) => (
  //       <li key={arrayPages.id} className={'item-card'}>
  //       </li>
  //     ))}
  //   </ul>
  // )
  // console.log('listPages',listPages)

  async componentDidMount() {
    this.props.loadCharacterListAsync();
  }

  handleInputChange(event) {
    // const dispatch = useDispatch();

    const checkbox = event.target;
    const elementName = event.target.name;
    const id = event.target.id;
    // let filtersArray = [];

    console.log('handleInputChange',event,elementName,'id',id)
    let checkboxes = document.getElementsByName(elementName)
    checkboxes.forEach((item) => {
      if (item !== checkbox) item.checked = false
    })
    const filters = {
      [elementName]: id
    };
    const existingElementIndex = filtersArray.findIndex(item => item[elementName] !== undefined);
    if (existingElementIndex !== -1) {
        filtersArray.splice(existingElementIndex,1);
        filtersArray.push(filters);
    }else {
      filtersArray.push(filters);

    }
    loadCharacterListAsyncFilter(filtersArray);
    // dispatch(loadCharacterListAsyncFilter(filtersArray));
    // this.props.loadCharacterListAsyncFilter(filtersArray);

    console.log('filters',filters,filtersArray)

  }

render() {
  // this.props.loadCharacterListAsyncFilter(filtersArray);

  return (

  <div className='container-characters'>
      <h1>Characters</h1>
      <form className={'container-group'} id="gender_form" >
        <div className={'container-checkbox'} onClick={this.handleInputChange}>
          <input type="checkbox" className={'checkbox'} id={'Male'} name={'gender'} />
          <label htmlFor={'Male'}>Male</label>
        </div>
        <div className={'container-checkbox'} onClick={this.handleInputChange}>
          <input type="checkbox" className={'checkbox'} id={'Female'} name={'gender'} />
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
      {/*<div className={'container--page-main'}>*/}
      {/*  {listPages}*/}
      {/*</div>*/}
    </div>
  )
}

};

function mapStateToProps(state) {
  return {
    countPages: state.counter.countPages,
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
