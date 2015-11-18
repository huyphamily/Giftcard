import React from 'react';
import './style.scss';

export default class GiftCard extends React.Component {
  render() {
    return (
      <div className="demo-card-image mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title mdl-card--expand"></div>
        <div className="mdl-card__actions">
          <span className="demo-card-image__filename">Image.jpg</span>
        </div>
      </div>
    )
  }
}