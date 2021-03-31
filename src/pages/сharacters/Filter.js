import React from 'react';
import './index.css';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {
  loadCharacterListAsyncFilter,
} from '../../actions/character';


class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopupFullCard: false,
      filtersArray: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
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
    const existingElementIndex = this.state.filtersArray.findIndex(item => item[elementName] !== undefined);
    if (existingElementIndex !== -1) {
      this.state.filtersArray.splice(existingElementIndex, 1);
      if (checked) {
        this.state.filtersArray.push(filters);
      }
    } else {
      this.state.filtersArray.push(filters);
    }
    const filtersString = this.state.filtersArray.map((item) => {
      const type = Object.keys(item);
      const value =  item[type];
      const str = type + '=' + value;
      return str;
    });
    this.filtersString = filtersString.join('&');
    this.props.loadCharacterListAsyncFilter('characters',this.filtersString);
  }
  render() {
    return (
      <>
        <form className={'container-group'} id="gender_form">
          <div className={'container-checkbox'} onClick={this.handleInputChange}>
            <input type="checkbox" className={'checkbox'} id={'Male'} name={'gender'}/>
            <label htmlFor={'Male'}>Male</label>
          </div>
          <div className={'container-checkbox'} onClick={this.handleInputChange}>
            <input type="checkbox" className={'checkbox'} id={'Female'} name={'gender'}/>
            <label htmlFor={'Female'}>Female</label>
          </div>
          <div className={'container-checkbox'} onClick={this.handleInputChange}>
            <input type="checkbox" className={'checkbox'} id={'genderless'} name={'gender'}/>
            <label htmlFor={'genderless'}>Genderless</label>
          </div>
          <div className={'container-checkbox'} onClick={this.handleInputChange}>
            <input type="checkbox" className={'checkbox'} id={'unknown'} name={'gender'}/>
            <label htmlFor={'unknown'}>Unknown</label>
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
      </>
    )

  }
}


function mapStateToProps(state) {
  return {
    characterList: state.character.characterList,
    filters: state.character.filterValue,
  };
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadCharacterListAsyncFilter,

    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);