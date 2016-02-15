import React from 'react';
import { Grid, Row, Col, Input, ButtonInput } from 'react-bootstrap';
import './paymentpage.scss';

export default class PaymentPage extends React.Component {

  render() {
    let monthRange = Array.from(new Array(12), (x,i) => i+1)
                          .map((value) => {
                            return (
                              <option value="select" key={value}>{value}</option>
                            )
                          });

    let yearRange = Array.from(new Array(10), (x,i) => i+2016)
                          .map((value) => {
                            return (
                              <option value="select" key={value}>{value}</option>
                            )
                          });



    return (
      <div>
        <h3 className="text-center bottom40">Enter Billing Information</h3>
        <Grid>
          <Row>
            <Col sm={6} smOffset={3}>
              <form className="form-horizontal">
                <Input type="text" label="Name on Card" labelClassName="col-xs-4" wrapperClassName="col-xs-8" />
                <Input type="text" label="Credit Card Number" labelClassName="col-xs-4" wrapperClassName="col-xs-8" />
                <Input type="text" label="CVV" labelClassName="col-xs-4" wrapperClassName="col-xs-8" />

                <div className="form-group">
                  <label className="control-label col-xs-4" id="basic-addon1">
                    <span>Expiration Date</span>
                  </label>
                  <div className="col-xs-2">
                    <div className="input-group payment-select">
                      <select className="form-control">{monthRange}</select>
                    </div>
                  </div>
                  <div className="col-xs-2">
                    <div className="input-group payment-select">
                      <select className="form-control">{yearRange}</select>
                    </div>
                  </div>
                </div>

                <Input type="text" label="Street Address" labelClassName="col-xs-4" wrapperClassName="col-xs-8" />
                <Input type="text" label="City" labelClassName="col-xs-4" wrapperClassName="col-xs-8" />
                <Input type="text" label="State" labelClassName="col-xs-4" wrapperClassName="col-xs-8" />
                <Input type="text" label="Zip" labelClassName="col-xs-4" wrapperClassName="col-xs-8" />
                <ButtonInput value="Next" className="custom-bottom-button" />
              </form>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}