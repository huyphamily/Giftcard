import React from 'react';
import './recipient.scss';

export default class RecipientPage extends React.Component {
  render() {
    return (
      <div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--3-col" />
          <div className="mdl-cell mdl-cell--6-col">
            <form className="recipient-form">
              <div>
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input 
                    className="mdl-textfield__input"
                    type="text" 
                    id="recipient_name" 
                    />
                  <label className="mdl-textfield__label" htmlFor="recipient_name">Recipient Name</label>
                </div>
              </div>
              <div>
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <textarea 
                    className="mdl-textfield__input"
                    type="text"
                    rows= "10"
                    id="recipient_message" 
                  />
                  <label className="mdl-textfield__label" htmlFor="recipient_message">Message</label>
                </div>
              </div>
            </form>
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
              Next
            </button>
          </div>
        </div>
      </div>
    )
  }
}