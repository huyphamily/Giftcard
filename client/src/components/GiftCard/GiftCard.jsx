import React from 'react';
import './giftcard.scss';

export default class GiftCard extends React.Component {
  render() {
    return (
      <div className="gift-card mdl-card mdl-shadow--2dp">
        <div className="mdl-card__media">
          <img src="/images/sample_card.png"
               alt="GiftCard"
          />
        </div>
      </div>
    )
  }
}