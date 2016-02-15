import React from 'react';
import GiftCard from '../GiftCard/GiftCard';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router'
import './giftpage.scss';

export default class GiftPage extends React.Component {
  render() {
    let giftCards = [1,2,3,4,5,6].map((value) => {
      return (
        <Col sm={4} key={value} className="gift-card-container">
          <GiftCard
            merchantImage="/images/sample_card.png"
            merchantMax={100}
            merchantMin={10}
          />
        </Col>
      )
    });

    return (
      <div>
        <h3 className="text-center bottom40">Choose A Gift Card</h3>
        <Grid>
          <Row>
            <Col sm={10} smOffset={1}>
              <Row>{giftCards}</Row>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}