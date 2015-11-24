import React from 'react';
import GiftPage from './GiftPage/GiftPage';
import './app.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Gift Card Company</span>
          </div>
        </header>
        <main className="mdl-layout__content">
          <GiftPage />
        </main>
      </div>
    )
  }
}