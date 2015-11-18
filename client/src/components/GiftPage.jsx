import React from 'react';
import GiftCard from './GiftCard/GiftCard';

export default class GiftPage extends React.Component {
  render() {
    let giftCards = [1,2,3].map(() => {
      return (<div className="mdl-cell mdl-cell--4-col">
        <GiftCard />
      </div>)
    });

    return (
      <div className="mdl-grid">
        {giftCards}
      </div>
    )
  }
}