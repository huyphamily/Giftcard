import React from 'react';
import { Grid, Row, Col, Input, ButtonInput } from 'react-bootstrap';
import './recipient.scss';

export default class RecipientPage extends React.Component {
  render() {
    return (
      <Grid>
        <h3 className="text-center bottom40">Enter Recipient Information</h3>
        <Row>
          <Col sm={8} smOffset={2}>
            <form>
              <Input 
                type="text"
                label="Recipient Name"
              />
              <Input 
                type="textarea"
                rows="7"
                label="Message"
                placeholder="Write a personal message"
              />
              <ButtonInput
                value="Next"
                className="custom-bottom-button"
              />
            </form>
          </Col>
        </Row>
      </Grid>
    )
  }
}