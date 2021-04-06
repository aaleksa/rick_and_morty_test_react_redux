import React from 'react';
import {connect} from 'react-redux';
import './popupFullCard.css';

class PopupFullCard extends React.Component {

  render() {
    return (
      <div className={'popup-character-card'}>
        {
          this.props.pressedCard && (
            <>
              <h2>{this.props.pressedCard.name}</h2>
              <img alt={'Нет картики'}
                className={'item-card-img'}
                   src={this.props.pressedCard.image}/>
              <span>{this.props.pressedCard.species}</span>
              <span>{this.props.pressedCard.status}</span>
              {
                this.props.pressedCard.location &&
                <div className={'item-card-location'}>
                  <span>{this.props.pressedCard.location.name}</span>
                  <a href={this.props.pressedCard.location.url}/>
                </div>
              }
              {
                this.props.pressedCard.origin &&
                <div className={'item-card-origin'}>
                  <span>{this.props.pressedCard.origin.name}</span>
                  <a href={this.props.pressedCard.origin.url}/>
                </div>
              }
            </>
          )
        }
      </div>

    )


  }
}

export default connect(
)(PopupFullCard);
