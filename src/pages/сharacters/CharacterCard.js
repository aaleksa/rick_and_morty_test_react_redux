import React from 'react';
import {connect} from 'react-redux';
import './index.css';

class CharacterCard extends React.Component {
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

    const id = event.target.parentElement.id;
    const newPressedCardValue = this.props.characterList.find((characterList) => {
      if (id == characterList.id) {
        return characterList;
      }
      return undefined;
    });

    if (newPressedCardValue === undefined) {
      this.setState({
        pressedCard: {debug_undefined: 'debug un'},
        showPopupFullCard: true,
      });
    } else {
      this.setState({
        pressedCard: newPressedCardValue,
        showPopupFullCard: true,
      });

    }
  }

  hideFullCard() {
    this.setState({showPopupFullCard: false});
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

    return (
        (
          <div>
            <div className={'container-popup-character-card'}>
              {this.state.showPopupFullCard && popupFullCard}
            </div>
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





