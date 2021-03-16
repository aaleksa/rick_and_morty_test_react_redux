import React from 'react';
import {connect} from 'react-redux';
import './index.css';

let pressedCard = {};
class CharacterCard extends React.Component {
  // console.log('showPopupFullCard', showPopupFullCard)
  constructor(props) {
    super(props);
    this.state = {
      showPopupFullCard: false,

    };
    this.showFullCard = this.showFullCard.bind(this);
    this.hideFullCard = this.hideFullCard.bind(this);
    this.setState = this.setState.bind(this)

  }

  showFullCard(event) {
    // const prevPressedCard = document.getElementsByClassName('pressedElement');
    //  if (prevPressedCard.length > 0) {
    //    prevPressedCard[0].classList.remove('pressedElement')
    //  }
    // document.getElementById(event.target.parentElement.id).classList.add('pressedElement');
    const id = event.target.parentElement.id;
   pressedCard = this.props.characterList.find((characterList) => {
      if(id == characterList.id) return characterList;
    });
    // this.setState(pressedCard)
    this.setState({showPopupFullCard: true});
    console.log('this.setState.pressedCard',pressedCard)
  }

  hideFullCard() {
    this.setState({showPopupFullCard: false});
    // console.log('showPopupFullCard', this.state.showPopupFullCard)

  }

  render() {
    const listItems = (
      <ul className={'container-card'}>
        {this.props.characterList && this.props.characterList.map((characterList) => (
          <li key={characterList.id}
              className={'item-card'}
              onClick={this.showFullCard}
              id={characterList.id}
          >
            <h2>{characterList.name}</h2>
            <img className={'item-card-img'} src={characterList.image}/>
            <span>{characterList.species}</span>
          </li>
        ))}
      </ul>
    )
    const popupFullCard = (
      <div className={'popup-character-card'}>
        <div>
          <button onClick={this.hideFullCard}>X</button>
        </div>
        <h2>{pressedCard.name}</h2>
        <img className={'item-card-img'}
             src={pressedCard.image}/>
        <span>{pressedCard.species}</span>
        <span>{pressedCard.status}</span>
        <div className={'item-card-location'}>
          <span>{pressedCard.location.name}</span>
          <a href={pressedCard.location.url}/>
        </div>
        <div className={'item-card-origin'}>
          <span>{pressedCard.origin.name}</span>
          <a href={pressedCard.origin.url}/>
        </div>

      </div>
    )

    if (this.state.showPopupFullCard) {
      console.log('showPopupFullCard === true', this.props.characterList)
      return (
        <div>
          <div className={'container-popup-character-card'}>
            {popupFullCard}
          </div>
          <div className={'container-main'}>
            {listItems}
          </div>
        </div>
      )
    } else {
      console.log('showPopupFullCard === false', this.props.characterList)
      return (
        <div>
          <div className={'container-main'}>
            {listItems}
          </div>
        </div>
      )
    }


  }
};

function mapStateToProps(state) {
  return {
    characterList: state.counter.characterList,
  };
}

export default connect(
  mapStateToProps,
)(CharacterCard);





