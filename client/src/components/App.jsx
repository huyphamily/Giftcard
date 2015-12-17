import React from 'react';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import './app.scss';

const navbarInstance = (
  <Navbar inverse staticTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Gift Card Company</a>
      </Navbar.Brand>
    </Navbar.Header>
  </Navbar>
);

export default class App extends React.Component {
  render() {
    return (
      <div>
        {navbarInstance}
        <div>{this.props.children}</div>
      </div>
    )
  }
}

