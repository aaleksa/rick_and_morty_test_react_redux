import React from 'react';
import {connect} from 'react-redux';
import './index.css';
import PopupFullCard from '../../components/PopupFullCard.js'


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
    const newPressedCardValue = this.props.characterList.find((characterItem) => {
      if (id == characterItem.id) {
        return characterItem;
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
    console.log('pressedCard', this.state.pressedCard)
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
            <img alt={'Нет картинки'} className={'item-card-img'} src={characterList.image}/>
            <span>{characterList.species}</span>
          </li>
        ))}
      </ul>
    )
    return (
      (
        <div>
          <div className={'container-popup-character-card'}>
            {this.state.showPopupFullCard &&
            <div>
              <button onClick={this.hideFullCard}>X</button>
            </div>
            }
            {this.state.showPopupFullCard &&
            <PopupFullCard pressedCard={this.state.pressedCard}/>
            }
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
    characterList: state.character.characterList,
  };
}

export default connect(
  mapStateToProps,
)(CharacterCard);





