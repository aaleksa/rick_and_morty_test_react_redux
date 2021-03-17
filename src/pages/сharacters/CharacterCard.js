import React from 'react';
import {connect} from 'react-redux';
import './index.css';

// let pressedCard = {};
class CharacterCard extends React.Component {
  // console.log('showPopupFullCard', showPopupFullCard)
  constructor(props) {
    super(props);
    this.state = {
      showPopupFullCard: false,
      pressedCard: {},
    };
    this.showFullCard = this.showFullCard.bind(this);
    this.hideFullCard = this.hideFullCard.bind(this);
  }

  showFullCard(event) {
    // const prevPressedCard = document.getElementsByClassName('pressedElement');
    //  if (prevPressedCard.length > 0) {
    //    prevPressedCard[0].classList.remove('pressedElement')
    //  }
    // document.getElementById(event.target.parentElement.id).classList.add('pressedElement');
    const id = event.target.parentElement.id;
    console.log('id', id, 'typeof id', typeof id);
    console.log('id', id, 'typeof id', typeof id);
    const newPressedCardValue = this.props.characterList.find((characterList) => {
      console.log('characterList.id', id, 'typeof characterList.id', typeof characterList.id);

      if (id == characterList.id) {
        return characterList;
      }
      return undefined;
    });
    const cardData = {
      "id": 3,
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Female",
      "origin": {
      "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
      "location": {
      "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
      "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
      "episode": [
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7",
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/9",
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/12",
      "https://rickandmortyapi.com/api/episode/14",
      "https://rickandmortyapi.com/api/episode/15",
      "https://rickandmortyapi.com/api/episode/16",
      "https://rickandmortyapi.com/api/episode/17",
      "https://rickandmortyapi.com/api/episode/18",
      "https://rickandmortyapi.com/api/episode/19",
      "https://rickandmortyapi.com/api/episode/20",
      "https://rickandmortyapi.com/api/episode/21",
      "https://rickandmortyapi.com/api/episode/22",
      "https://rickandmortyapi.com/api/episode/23",
      "https://rickandmortyapi.com/api/episode/24",
      "https://rickandmortyapi.com/api/episode/25",
      "https://rickandmortyapi.com/api/episode/26",
      "https://rickandmortyapi.com/api/episode/27",
      "https://rickandmortyapi.com/api/episode/29",
      "https://rickandmortyapi.com/api/episode/30",
      "https://rickandmortyapi.com/api/episode/31",
      "https://rickandmortyapi.com/api/episode/32",
      "https://rickandmortyapi.com/api/episode/33",
      "https://rickandmortyapi.com/api/episode/34",
      "https://rickandmortyapi.com/api/episode/35",
      "https://rickandmortyapi.com/api/episode/36",
      "https://rickandmortyapi.com/api/episode/38",
      "https://rickandmortyapi.com/api/episode/39",
      "https://rickandmortyapi.com/api/episode/40",
      "https://rickandmortyapi.com/api/episode/41"
    ],
      "url": "https://rickandmortyapi.com/api/character/3",
      "created": "2017-11-04T19:09:56.428Z"
    };
    console.log('!!!!!! newPressedCardValue', newPressedCardValue);
    console.log('this.setState.pressedCard', this.state.pressedCard)
    if (newPressedCardValue === undefined) {
      console.log('newPressedCardValue === undefined  TRUE TRUE  TREU');
      this.setState({
        pressedCard: {debug_undefined: 'debug un'},
        showPopupFullCard: true,
      });
    } else {
      console.log('newPressedCardValue === undefined  FALSE FALSE FALSE FALSE ');
      this.setState({
        pressedCard: newPressedCardValue,
        // pressedCard: cardData,
        showPopupFullCard: true,
      });

    }
    // this.setState(pressedCard)
    // this.setState();
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
        {
          this.state.pressedCard && (
              <>
                <h2>{this.state.pressedCard.name}</h2>
                <img className={'item-card-img'}
                     src={this.state.pressedCard.image}/>
                <span>{this.state.pressedCard.species}</span>
                <span>{this.state.pressedCard.status}</span>
                {
                  this.state.pressedCard.location &&
                  <div className={'item-card-location'}>
                    <span>{this.state.pressedCard.location.name}</span>
                    <a href={this.state.pressedCard.location.url}/>
                  </div>
                }
                {
                  this.state.pressedCard.origin &&
                  <div className={'item-card-origin'}>
                    <span>{this.state.pressedCard.origin.name}</span>
                    <a href={this.state.pressedCard.origin.url}/>
                  </div>
                }
              </>
            )
        }


      </div>
    )
    console.log('showPopupFullCard === true', this.props.characterList)

    return (
      this.state.showPopupFullCard ?
        (
          <div>
            <div className={'container-popup-character-card'}>
              {popupFullCard}
            </div>
            <div className={'container-main'}>
              {listItems}
            </div>
          </div>
        )
        : (
          <div>
            <div className={'container-main'}>
              {listItems}
            </div>
          </div>
        )
    );
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





