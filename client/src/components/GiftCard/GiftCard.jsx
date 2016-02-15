import React from 'react';
import { Image } from 'react-bootstrap';
import './giftcard.scss';

export default class GiftCard extends React.Component {
  render() {
    return (
      <Image className="gift-card" src={this.props.merchantImage} rounded/>
    )
  }
}