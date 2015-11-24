import React from 'react';
import GiftCard from '../GiftCard/GiftCard';
import './giftpage.scss';

export default class GiftPage extends React.Component {
  render() {
    let giftCards = [1,2,3].map(() => {
      return (
        <div className="mdl-cell mdl-cell--4-col">
          <GiftCard />
        </div>
      )
    });

    return (
      <div>
        <h1 className="gift-page mdl-layout__title mdl-typography--text-center">Choose A Gift Card</h1>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--1-col"></div>
          <div className="mdl-cell mdl-cell--10-col">
            <div className="mdl-grid">
              {giftCards}
            </div>
          </div>
        </div>
      </div>
    )
  }
}