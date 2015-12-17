import React from 'react';
import { Grid, Row, Col, Input, ButtonInput } from 'react-bootstrap';
import './recipient.scss';

export default class RecipientPage extends React.Component {
  render() {
    return (
      <Grid>
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
                type="submit"
                value="Next"
                className="pull-right"
              />
            </form>
          </Col>
        </Row>
      </Grid>
    )
  }
}